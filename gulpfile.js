var gulp        = require('gulp');
var gutil       = require('gulp-util');
var phpconnect  = require('gulp-connect-php');
var connect     = require('gulp-connect');
var sass        = require('gulp-sass');
var rev         = require('gulp-rev');
var revReplace  = require('gulp-rev-replace');
var useref      = require('gulp-useref');
var gulpif      = require('gulp-if');
var uglify      = require('gulp-uglify');
var cssmin      = require('gulp-minify-css');
var debug       = require('gulp-debug');
var gzip        = require('gulp-gzip');
var del         = require('del');
var modrewrite  = require('connect-modrewrite');
var replace     = require('gulp-replace');
var shell       = require('gulp-shell');
var autoprefixer = require('gulp-autoprefixer');
var pump = require('pump');

var webpack         = require('webpack');
var WebpackDevServer= require('webpack-dev-server');

// Static Server + watching scss/html files
gulp.task('php', ['sass'], function(cb) {

    phpconnect.server({
        port: 8000
    }, function() {
        // connect is required to serve static assets from multiple roots
        connect.server({
            port: 8001,
            root: [__dirname, './.tmp', 'node_modules'],
            middleware: function() {
                return [
                    // urls without extensions or with php extension should
                    // be proxied to php. This prevents dots in urls, though.
                    modrewrite([
                        '^([^.]*|.*?\.php)$ http://localhost:8000$1 [P,NC]'
                    ])
                ];
            }
		});
		cb();
    });

    gulp.watch('./assets/css/**/*.scss', ['sass']);
});

gulp.task('serve', ['php', 'webpack:dll', 'copy:tutorials'], function() {
	var devWebpackConfig   = require('./dev.config.js');
	new WebpackDevServer(webpack(devWebpackConfig), {
		publicPath: devWebpackConfig.output.publicPath,
		hot: true,
		historyApiFallback: true,
		proxy: {
			'*':'http://localhost:8001',
		},
	}).listen(9002, '0.0.0.0', function(err, result) {
		if (err) {
			console.log(err);
		}
		console.log('Listening at localhost:9002');
	});
});

gulp.task('webpack:dll', ['clean:dll'], function(callback) {
	var dllWebpackConfig   = require('./dll.config.js');
	var prototypoConfig = Object.create(dllWebpackConfig);
	webpack(prototypoConfig, function(err, stats) {
		if (err) return new gutil.PluginError("webpack", err);

		gutil.log('[webpack]', stats.toString({
		}));

		callback();
	});
});

gulp.task('webpack:build', ['clean:dist'], function(callback) {
	var prodWebpackConfig   = require('./prod.config.js');
	var prototypoConfig = Object.create(prodWebpackConfig);
	webpack(prototypoConfig, function(err, stats) {
		if (err) return new gutil.PluginError("webpack", err);

		gutil.log('[webpack]', stats.toString({
		}));

		callback();
	});
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('./assets/css/*.scss')
      .pipe(sass().on('error', sass.logError))
	  .pipe(autoprefixer())
      .pipe(gulp.dest('./.tmp/assets'))
});

gulp.task('clean:dist', function(cb) {
    return del([
      './dist/**/*'
    ]);
});

gulp.task('clean:dll', function(cb) {
    return del([
      './dll/**/*'
    ]);
});

gulp.task('clean:tutorials', function(cb) {
    return del([
      './content/6-academy/**/*',
      '!./content/6-academy/academyhome.txt',
      '!./content/6-academy/academy-screenshot.png'
    ]);
});
// This task can be used instead of clean:dist to make sure all root images
// are copied over to dist.
gulp.task('copy:images', ['clean:dist'], function(cb) {
    return gulp.src('./*.png')
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy:tutorials', ['clean:tutorials'], function(cb) {
    return gulp.src('./node_modules/tutorial-content/libKirby/**/*')
        .pipe(gulp.dest('./content/6-academy'));
});

gulp.task('copy:static', ['copy:tutorials'], function(cb) {
    return gulp.src('./_redirects')
        .pipe(gulp.dest('./dist'));
});

gulp.task('build:assets', ['sass', 'webpack:build'], function() {
    var assets = useref.assets({
            searchPath: './'
        });

    return gulp.src('./site/snippets/dev/*.php')
        .pipe(assets)
        .pipe(rev())
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(revReplace({
            replaceInExtensions: ['.php']
        }))
        .pipe(gulpif(/(\.js|\.css)$/, gulp.dest('./')))
        .pipe(gulpif('*.php', gulp.dest('./site/snippets/prod')));
});

var buildPort = 8003;
gulp.task('build:server', ['build:assets'], function(done) {
    phpconnect.server({
        port: buildPort
    }, done);
});

gulp.task('build:static', ['copy:static', 'build:server'], function(done) {
    return gulp.src('')
            .pipe(shell([
                'wget -q --recursive --reject-regex \'imgur\' --level=0 --adjust-extension --convert-links --no-host-directories --directory-prefix dist/ ' +
                'http://localhost:' + buildPort
            ]))
            .pipe(shell([
                'wget --recursive --level=0 --adjust-extension --convert-links --no-host-directories --directory-prefix dist/ ' +
                'http://localhost:' + buildPort + '/googlefe2ce91b44ba9af0.html '
            ]))
            .pipe(shell([
                'wget http://localhost:' + buildPort + '/404 ' +
                    '--content-on-error --adjust-extension --convert-links --no-host-directories --directory-prefix dist/',
                // kill php server
                'fuser -k ' + buildPort + '/tcp'
            ], {
                // the second wget will always error. Ignore that
                ignoreErrors: true
            }));
});

// fix `page:1.html` kind of links to avoid confusion with protocol
gulp.task('build:fix', ['build:static'], function() {
    return gulp.src('./dist/**/*.html')
        .pipe(replace(/href="(page|tag):/g, 'href="./$1:'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['build:fix']);
