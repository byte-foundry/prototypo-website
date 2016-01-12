var path = require('path');
var webpack = require('webpack');

module.exports = {
	cache: true,
	entry: [
		//'webpack-dev-server/client?http://0.0.0.0:9000', // WebpackDevServer host and port
		//'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors 
		'babel-polyfill',
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
				//preloaders: ['prelude-loader'],
				//loaders: ['react-hot-loader', 'babel-loader'],
				loaders: ['babel-loader'],
				include: [
					path.join(__dirname, 'assets')
				]
			}
		],
		noParse:/(levelup|prototypo-canvas|lifespan|nexus-flux|remutable)/
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['','.js', '.jsx']
	}
}
