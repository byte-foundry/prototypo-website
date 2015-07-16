var gulp = require('gulp'),
    watch = require('gulp-watch'),
    minifyCSS = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps')
    sass = require('gulp-sass'),
    build = require('gulp-build'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css');


gulp.task('watch', function () {
  gulp.watch(['assets/src/**/*'], ['build']);
});


gulp.task('sass', function () {
    gulp.src('assets/src/css/styles.scss')
        .pipe(sass())
        .pipe(concatCss('styles.min.css'))
        .pipe(minifyCSS({keepBreaks:false}))
        .pipe(gulp.dest('assets/'));
});

gulp.task('uglify', function() {
  return gulp.src('assets/src/js/*.js')
    // .pipe(sourcemaps.init())
        // .pipe(uglify())
        .pipe(concat('scripts.min.js'))
    // .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('assets/'));
});


gulp.task('build', ['sass', 'uglify'], function(){
  return gulp.src('assets/**/*');
});
