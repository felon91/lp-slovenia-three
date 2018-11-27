module.exports = function () {
  $.gulp.task('allimg', function () {
    return $.gulp.src('images/helpslovenia/**/*.{png,jpg,svg}')
        .pipe($.gulp.dest('build/images/helpslovenia'));
  });
};