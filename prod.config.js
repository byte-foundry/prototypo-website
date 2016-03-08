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
				loaders: ['transform/cacheable?envify','babel-loader'],
				include: [
					path.join(__dirname, 'assets')
				]
			}
		],
		noParse:/(levelup|prototypo-canvas)/
	},
	resolve: {
		extensions: ['','.js', '.jsx']
	}
}
