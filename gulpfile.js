var gulp = require('gulp'),
   watch = require('gulp-watch'),
   sass = require('gulp-sass'),
   autoprefixer = require('gulp-autoprefixer');

gulp.task('watch', function() {

   watch('./app/sass/**/*.scss', function() {
      compileSass();
   });
   
});


function compileSass() {
   return gulp.src('app/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest('app/css'));
}
