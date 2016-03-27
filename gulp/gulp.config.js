import { argv } from 'yargs';

function getEnv(log){
	if(argv.dev){
  		return 'development';
  	} else if(argv.prod){
  		return 'production';
  	} else {
  		if(log){ console.log('No environment selected => Default: development') }
  		return 'development';
  	}
}

function getEnvironmentKeys(dev, prod) {
  	var env = getEnv(true);
  	const keys = require(`./environments/${env}.js`);
  	keys.environment = env;
  	return keys;
}

export const env = getEnv();
export const environmentKeys = getEnvironmentKeys();

export const  vendors = [
  	'/angular/angular.js',
  	'/angular-animate/angular-animate.js',
  	'/angular-aria/angular-aria.js',
  	'/angular-messages/angular-messages.js',
  	'/angular-ui-router/release/angular-ui-router.js',
  	'/angular-local-storage/dist/angular-local-storage.js',
  	'/angular-material/angular-material.js',
  	'/angular-material/angular-material.css'
];	

export const vars = {

	buildPath: './build',
	bowerPath: './bower_components',
	defaultPort: '3000',
	fallbackFile: './build/index.html',

	files: {
		appAssetsFiles: './src/assets/**/*',
		appJsFiles: ['./src/app/**/*.js', '!./src/app/config/*.js'],
		appHtmlFiles: './src/app/**/*.html',
		jsInjectable : [ './build/app/**/*.js', './build/vendor/**/*.js', './build/assets/css/**/*.css'],
		cssInjectable : ['./build/vendor/**/*.css'],
		indexFile: './src/index.html',
		buildIndexFile: './build/index.html',
		jsFiles: ['./src/**/*.js']
	},

	folders: {
		buildAssetsFolder: './build/assets',
		buildAppFolder: './build/app',
		buildVendorFolder: './build/vendor',
		buildConfigFolder: './build/app/config'
	}
};