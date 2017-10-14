var webpack = require('webpack');
var path = require('path');

var config = {
  devtool: 'source-map',
  entry: __dirname + '/src/index.js',
  output: {
    path: path(__dirname, 'dist'),
    filename: "index.js",
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  externals: {
    'react': 'commonjs react'
  }
};

module.exports = config;
