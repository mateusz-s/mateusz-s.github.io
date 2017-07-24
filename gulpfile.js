var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', ['sass'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
                .pipe(sass({outputStyle: 'compressed'}))
                .pipe(gulp.dest('css'))
                .pipe(browserSync.reload({stream: true}));
});

gulp.task('default', ['browser-sync'], function () {
    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
});