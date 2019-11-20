module.exports = function() {
    $.gulp.task('watch',function(){
        $.gulp.watch('src/pug/**/*.pug',$.gulp.series('pug')).on('change', $.bs.reload);
        $.gulp.watch('src/static/css/**/*.scss',$.gulp.series('sass')).on('change', $.bs.reload);
        $.gulp.watch('src/static/js/*.js',$.gulp.series('scripts')).on('change', $.bs.reload);
        $.gulp.watch('src/static/img/*',$.gulp.series('img')).on('change', $.bs.reload);
        $.gulp.watch('src/static/fonts/*',$.gulp.series('fonts')).on('change', $.bs.reload);
        $.gulp.watch('src/static/svg/*',$.gulp.series('svg')).on('change', $.bs.reload);
    });
}
