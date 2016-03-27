import gulp from 'gulp';
import browserSync from 'browser-sync';
import connect from 'gulp-connect';
import historyApiFallback from 'connect-history-api-fallback';
import { argv } from 'yargs';
import serve from 'gulp-serve';
import runSequence from 'run-sequence';

import { vars } from '../gulp.config.js';
import { environmentKeys } from '../gulp.config.js';


gulp.task('basic-serve', serve('build'));

gulp.task('serve', function(callback) {
  	if (environmentKeys.watch) {
		if(argv.sync) {
  			browserSync({
		      	server: {
		        	baseDir: vars.buildPath
		      	},
		      	files: vars.buildPath+'/**/*',
		      	reloadDelay: 100,
		      	open: false,
		      	port: vars.defaultPort,
		      	middleware: [historyApiFallback()] // html5mode
	  		})
  		} else {
  			runSequence('basic-serve', callback)
  		}
	  	
  	} 
  	else {
		connect.server({
  			root: vars.buildSrc,
  			port: process.env.PORT || vars.defaultPort,
  			fallback: vars.fallbackFile // html5mode
		});
	}
});