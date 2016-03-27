import gulp from 'gulp';

gulp.task('watch', function(){
	gulp.watch(['./src/**/*.html', './src/**/*.js', './src/**/*.css'], ['build'])
});