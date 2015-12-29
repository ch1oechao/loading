var gulp = require('gulp');
var jshint = require('gulp-jshint');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('scripts', function() {
  return gulp.src('src/*.js')
             .pipe(jshint())
             .pipe(babel())
             .pipe(gulp.dest('build'));
});

gulp.task('styles', function() {
  gulp.src('src/*.less')
      .pipe(less())
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(minifyCSS())
      .pipe(gulp.dest('build'))
});

gulp.task('html', function() {
  gulp.src('src/*.html').pipe(gulp.dest('build'))
});

gulp.task('watch', function() {
  gulp.watch('src/*.js', ['scripts']);
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/*.less', ['styles']);
});

gulp.task('clean', function() {
  return gulp.src('build')
             .pipe(clean());
});

gulp.task('connect', function() {
    connect.server({
      root: 'build',
      livereload: true
    });
});

gulp.task('default', ['watch', 'scripts', 'html', 'styles', 'connect', 'watch']);
