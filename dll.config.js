var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
	entry: {
		libs: [
			'react',
			'moment',
			'babel-polyfill',
			'lifespan',
			'nexus-flux',
			'remutable',
			'bluebird',
			'history'
		],
	},
	output: {
		path: path.join(__dirname, 'dll/'),
		filename: '[name].dll.js',
		library: '[name]_[hash]',
		libraryTarget: 'this'
	},
	plugins: [
		new webpack.DllPlugin({
			path: path.join(__dirname, 'dll/', '[name]-manifest.json'),
			name: '[name]_[hash]',
		})
	],
}
