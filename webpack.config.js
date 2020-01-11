const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  	rules: [
		{
			test: /\.css$/,
			use: [ 
				'style-loader', 'css-loader',
			],
		},
		{
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
		},
		{
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader',
          ],
        },
  	]
  },
   // webpack-dev-server configuration
  devServer: {
    // This is where webpack-dev-server serves your static
    // pages. In this example configuration, put your shell
    // page index.html in './dist' directory, and it becomes
    // accessible from:
    //   http://localhost/index.html
    contentBase: './dist/',
    // Make webpack-dev-server live-reload when your
    // shell page changes
    watchContentBase: true
  }
};