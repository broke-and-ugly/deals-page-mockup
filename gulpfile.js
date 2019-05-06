var gulp = require('gulp'),
   watch = require('gulp-watch'),
   sass = require('gulp-sass'),
   autoprefixer = require('gulp-autoprefixer'),
   browserSync = require('browser-sync').create();


gulp.task('watch', function() {
   browserSync.init({
      server: {
         baseDir: "app"
      },
      online: true,
      tunnel: true,
      logLevel: "debug"
   });

   watch('./app/index.html', function() {
      browserSync.reload();
   });

   watch('./app/sass/**/*.scss', function() {
      compileSass();
      injectCSS();
   });
   
});


function compileSass() {
   return gulp.src('app/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest('app/css'));
}

function injectCSS() {
   return gulp.src('./app/css/style.css')
      .pipe(browserSync.stream());
}
