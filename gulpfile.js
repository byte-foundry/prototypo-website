var gulp        = require('gulp');
var gutil       = require('gulp-util');
var phpconnect  = require('gulp-connect-php');
var connect     = require('gulp-connect');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var rev         = require('gulp-rev');
var revReplace  = require('gulp-rev-replace');
var useref      = require('gulp-useref');
var gulpif      = require('gulp-if');
var uglify      = require('gulp-uglify');
var cssmin      = require('gulp-minify-css');
var debug       = require('gulp-debug');
var gzip        = require('gulp-gzip');
var rimraf      = require('rimraf');
var modrewrite  = require('connect-modrewrite');
var replace     = require('gulp-replace');
var shell       = require('gulp-shell');
var babelify    = require('babelify');
var browserify  = require('browserify');
var watchify    = require('watchify');
var exorcist    = require('exorcist');
var source      = require('vinyl-source-stream');
var autoprefixer = require('gulp-autoprefixer');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

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
        browserSync.init({
            port: 8002,
            proxy: 'localhost:8001'
        });
    });

    gulp.watch('./assets/css/**/*.scss', ['sass']);
    gulp.watch([
        './assets/js/**/*.js',
        './site/**/*.php'
    ]).on('change', browserSync.reload);
});

watchify.args.debug = true;
watchify.args.extensions = ['.jsx', '.js'];
var bundler = watchify(browserify('./assets/js/app.jsx', watchify.args));

// Babel transform
bundler.transform(babelify.configure({
	sourceMapRelative: '.',
	stage: 0,
	extensions: ['.jsx', '.js']
}));

// On updates recompile
bundler.on('update', bundle);

function bundle() {
    gutil.log('Compiling JS...');

    return bundler.bundle()
        .on('error', function (err) {
            gutil.log(err.message);
            browserSync.notify('Browserify Error!');
            this.emit('end');
        })
        .pipe(exorcist('./assets/js/bundle.js.map'))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./assets/js/'))
        .pipe(browserSync.stream({once: true}));
}

// gulp task alias
gulp.task('bundle', function () {
    return bundle();
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('./assets/css/*.scss')
      .pipe(sass().on('error', sass.logError))
	  .pipe(autoprefixer())
      .pipe(gulp.dest('./.tmp/assets'))
      .pipe(browserSync.stream());
});

gulp.task('clean:dist', function(cb) {
    rimraf('./dist', cb);
});

// This task can be used instead of clean:dist to make sure all root images
// are copied over to dist.
gulp.task('copy:images', ['clean:dist'], function(cb) {
    return gulp.src('./*.png')
        .pipe(gulp.dest('./dist'));
});

gulp.task('build:assets', ['sass', 'clean:dist'], function() {
    var assets = useref.assets({
            searchPath: './'
        });

    return gulp.src('./site/snippets/dev/*.php')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cssmin({
            rebase: false
        })))
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

gulp.task('build:static', ['build:server'], function(done) {
    return gulp.src('')
            .pipe(shell([
                'wget http://localhost:' + buildPort + ' ' +
                    '--recursive --level=0 --adjust-extension --convert-links --no-host-directories --directory-prefix dist/',
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
