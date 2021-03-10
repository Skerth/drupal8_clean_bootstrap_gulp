const gulp = require('gulp')
const sass = require('gulp-sass')
const shorthand = require('gulp-shorthand')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')

module.exports = function styles() {
  return gulp.src('scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(shorthand())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
}
