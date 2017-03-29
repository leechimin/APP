var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compileSass',function(){
    gulp.src('./src/sass/home.scss')
    .pipe(sass({
        outputStyle:'expanded'
    }))
    .pipe(gulp.dest('./src/css/'))
})