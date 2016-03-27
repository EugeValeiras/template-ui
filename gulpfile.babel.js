import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';

//IMPORTANT IMPORTS FOR NEXT STEPS.
import debug from 'gulp-debug';
import concat from 'gulp-concat';
import cached from 'gulp-cached';

requireDir('./gulp/tasks', { recurse: true });

gulp.task('default', function(callback){
	runSequence('build', 'watch', 'serve', callback)
});