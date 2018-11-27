module.exports = function () {
  $.gulp.task('serve', function () {
    $.browserSync.init({
      server: 'build/'
    });

    $.gulp.watch('sass/**/*.scss', ['sass']);
    $.gulp.watch('*.html', ['html']);
    $.gulp.watch('js/**/*.js', ['scripts']);
    $.gulp.watch('css/**/*.css', ['css']);
    $.gulp.watch('images/helpslovenia/**/*.{png,jpg,svg}', ['allimg']);
    $.gulp.watch('images/helpslovenia/**/*.{svg}', ['svg']);
  });
};