var webpack = require('webpack');
var path = require('path');
var libraryName = 'library';
var outputFile = libraryName + '.js';

var config = {
  devtool: 'source-map',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules|bower_components)/
        loader: 'babel-loader',
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  }
};

module.exports = config;
