var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();

gulp.task('browser-sync', ['sass'], function () {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(bs.reload({ stream: true }));
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("scss/style.scss", ['sass']);
    gulp.watch("index.html").on('change', bs.reload);
});