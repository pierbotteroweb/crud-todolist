var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('default',function(done){
return watch("./app/**/*.js", function (){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });  done()
})
});

//	gulp.watch(["./app/**/*.js","./src/*.html"],['browser']);