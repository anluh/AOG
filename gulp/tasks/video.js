module.exports = function() {
    $.gulp.task('video', function() {
        return $.gulp.src('src/static/video/*.{mp4,ogg}')
            .pipe($.gulp.dest('build/video'))
    });
}
