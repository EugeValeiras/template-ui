import gulp from 'gulp';
import uglify from 'gulp-uglify';

import { vars } from '../gulp.config.js';

gulp.task('uglifyJsFiles', function(){
	return gulp.src(vars.files.jsFiles)
		.pipe(uglify())
		.pipe(gulp.dest(vars.buildPath));
});