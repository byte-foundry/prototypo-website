var gulp        = require('gulp');
var connect     = require('gulp-connect-php');
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

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    connect.server({}, function() {
        browserSync.init({
            proxy: 'localhost:8000'
        });
    });

    gulp.watch("./assets/css/**/*.scss", ['sass']);
    gulp.watch("./assets/js/*.js").on('change', browserSync.reload);
    gulp.watch("./site/**/*.php").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    gulp.src('./assets/css/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./assets'))
      .pipe(browserSync.stream());
});

gulp.task('build', ['sass'], function() {
    var assets = useref.assets({
            searchPath: '/'
        });

    // clean dist
    rimraf('./assets/dist/', console.error);

    return gulp.src("./site/snippets/dev/*.php")
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cssmin({
            rebase: false
        })))
        .pipe(rev())
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(revReplace({
            replaceInExtensions: ['.php'],
            // add a .gz extension befeore the file extension
            // modifyReved: function( filename ) {
            //     return ( typeof filename === 'string' ? filename : filename[0] )
            //                 .replace(/(\.js|\.css)$/, '.gz$1');
            // };
        }))
        // .pipe(gulpif(/(\.js|\.css)$/, gzip({ preExtension: 'gz' })))
        .pipe(gulpif(/(\.js|\.css)$/, gulp.dest('./')))
        .pipe(gulpif('*.php', gulp.dest('./site/snippets/prod')));
});
