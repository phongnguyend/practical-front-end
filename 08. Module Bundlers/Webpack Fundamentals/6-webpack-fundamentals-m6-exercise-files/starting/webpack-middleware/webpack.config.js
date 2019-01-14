var path = require('path');

module.exports = {
	context: path.resolve('public/js'),
	entry: "./app",
	output: {
		path: path.resolve('build/'),
		publicPath: '/public/assets/',
		filename: "bundle.js"
	},
	devServer: {
		contentBase: 'public'
	},

	module: {
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader"
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
}