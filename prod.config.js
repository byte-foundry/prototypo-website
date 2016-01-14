var path = require('path');
var webpack = require('webpack');

module.exports = {
	cache: true,
	entry: [
		'./assets/js/app.jsx',
	],
	output: {
		path: path.join(__dirname, 'assets/'),
		publicPath: 'assets/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel-loader', 'transform/cacheable?envify'],
				include: [
					path.join(__dirname, 'assets')
				]
			}
		],
		noParse:/(levelup|prototypo-canvas|lifespan|nexus-flux|remutable)/
	},
	resolve: {
		extensions: ['','.js', '.jsx']
	}
}
