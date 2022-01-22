const gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

gulp.task('minifyImg', async () => {
  gulp.src('src/assets/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/img'))
});

gulp.task('compileSass', async function () {
  gulp.src('src/assets/sass/*.scss')
    .pipe(sass().on('ERROR', sass.logError))
    .pipe(gulp.dest('src/assets/css'))
});
gulp.task('minifyCss', async () => {
  gulp.src('src/assets/css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename('styleMin.css'))
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('minifyHtml', async () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(rename('indexMin.html'))
    .pipe(gulp.dest('dist'));
});

gulp.task('concatJs', async function () {
  gulp.src('src/assets/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/assets/js/'));
});



gulp.task('watch', async function () {
  gulp.watch('src/assets/img/*', gulp.series('minifyImg'));
  gulp.watch('src/assets/sass/*', gulp.series('compileSass'));
  gulp.watch('src/assets/css/*', gulp.series('minifyCss'));
  gulp.watch('src/*', gulp.series('minifyHtml'));
  gulp.watch('src/assets/js/*', gulp.series('concatJs'));
});

gulp.task('default', gulp.series('minifyImg', 'compileSass', 'concatJs', 'minifyCss', 'minifyHtml', 'watch'));