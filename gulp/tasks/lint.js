import gulp from 'gulp';
import jshint from 'gulp-jshint';

import { vars } from '../gulp.config.js';

gulp.task('lint', function(){
	return gulp.src(vars.files.jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});