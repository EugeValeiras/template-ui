import gulp from 'gulp';
import inject from 'gulp-inject';
import angularFilesort from 'gulp-angular-filesort';
	
import { vars } from '../gulp.config.js';

gulp.task('inject', function(){
	return gulp.src(vars.files.indexFile)
		.pipe(inject(gulp.src(vars.files.jsInjectable).pipe(angularFilesort()), {ignorePath : 'build'}))
		.pipe(inject(gulp.src(vars.files.cssInjectable), {ignorePath : 'build'}))
		.pipe(gulp.dest(vars.buildPath));
});