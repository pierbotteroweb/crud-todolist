var gulp = require('gulp'),
    concat= require('gulp-concat'),
    browserSync = require('browser-sync').create(),
    webpack = require('webpack');

    gulp.task('browser',function(){
      browserSync.init({
      watch: true,
          server:"./dist"
      });
  });

  gulp.task('montaPg',function(){
    
    webpack(require('./webpack.config.js'),function(err,stats){
      if(err){
        console.log(err.toString());
      }

      console.log("Webpack finalizado")   

    })

    function monta(){
        return gulp.src(['src/_header.html',
     'src/_index.html','src/_footer.html'])
     .pipe(concat('index.html'))
     .pipe(gulp.dest('dist'))
    }

    monta()
})

gulp.task('watch',function(){
gulp.watch(["./app/**/*.js","./src/*.html"],['montaPg'])
})

gulp.task('default',['browser','watch']);






