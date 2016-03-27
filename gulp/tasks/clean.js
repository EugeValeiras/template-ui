import gulp from 'gulp';
import del from 'del';
import cached from 'gulp-cached';

import { vars } from '../gulp.config.js';

gulp.task('clean', function(){
	cached.caches = {};
	return del([vars.buildPath])
});