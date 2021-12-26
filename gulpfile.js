const gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const pug = require('gulp-pug');

gulp.task('compile-sass', function () {
  gulp.src('src/assets/sass/*.scss')
    .pipe(sass().on('ERROR', sass.logError))
    .pipe(gulp.dest('src/assets/css'))
});
gulp.task('minify-css', () => {
  gulp.src('src/assets/css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename('styleMin.css'))
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('minify-html', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(rename('indexMin.html'))
    .pipe(gulp.dest('dist'));
});

gulp.task('compilePug', () => {
  src('./src/*.pug')
    .pipe(pug({ // your option
    }))
    .pipe(dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch('src/assets/sass/*', gulp.series('compile-sass'));
  gulp.watch('src/assets/css/*', gulp.series('minify-css'));
  gulp.watch('src/*', gulp.series('compilePug'));
});

gulp.task('default', gulp.parallel('compile-sass', 'minify-css', 'compilePug', 'watch'));