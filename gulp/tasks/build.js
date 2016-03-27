import gulp from 'gulp';
import runSequence from 'run-sequence';
import debug from 'gulp-debug';

import { vendors } from '../gulp.config';
import { env } from '../gulp.config';
import { vars } from '../gulp.config';

gulp.task('build', function(callback){
	runSequence('clean', 'copy-build', 'inject', callback)
});

gulp.task('copy-build', function(callback){
	runSequence('copy-assets', 'copy-app-js', 'copy-environment-js', 'copy-app-html', 'copy-vendor-js', callback);
});

gulp.task('copy-assets', function(){
	return gulp.src(vars.files.appAssetsFiles)
		.pipe(gulp.dest(vars.folders.buildAssetsFolder))
});

gulp.task('copy-app-js', function(){
	return gulp.src(vars.files.appJsFiles)
		.pipe(gulp.dest(vars.folders.buildAppFolder))
});

gulp.task('copy-environment-js', function(){
	return gulp.src('./src/app/config/'+env+'.js')
		.pipe(debug())
		.pipe(gulp.dest(vars.folders.buildConfigFolder))
});

gulp.task('copy-app-html', function(){
	return gulp.src(vars.files.appHtmlFiles)
		.pipe(gulp.dest(vars.folders.buildAppFolder))
});

gulp.task('copy-vendor-js', function(){
	return gulp.src(vendors.map(vendor => vars.bowerPath.concat(vendor)))
		.pipe(gulp.dest(vars.folders.buildVendorFolder))
});