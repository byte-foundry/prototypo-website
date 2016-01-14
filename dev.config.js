var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var config = {
	devtool: 'eval',
	entry: {
		bundle: [
			'webpack-dev-server/client?http://0.0.0.0:9002', // WebpackDevServer host and port
			'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors 
			'babel-polyfill',
			'./assets/js/app.jsx',
		],
	},
	output: {
		path: path.join(__dirname, 'assets/'),
		publicPath: '/assets/',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{ 
				test: /\.jsx?$/,
				loaders: ['react-hot', 'babel?cacheDirectory'],
				include: path.join(__dirname, 'assets'),
			}
		],
		noParse: [
			/(levelup|prototypo-canvas|lifespan|nexus-flux|remutable)/
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require('./dll/libs-manifest'),
			sourceType: 'this',
		}),
	],
	resolve: {
		extensions: ['','.js', '.jsx'],
	}
}

module.exports = config;
