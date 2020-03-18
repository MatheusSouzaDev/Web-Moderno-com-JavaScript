const dev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')

module.exports = {
	mode: dev ? 'development' : 'production',
	entry: './src',
	output: {
		filename: 'app.min.js',
		path: __dirname + '/public/assets/js'
	},
	devServer: {
		contentBase: "./public",
		port: 9000
	},
}