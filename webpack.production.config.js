var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  vendors: ['react', 'react-dom', 'redux', 'react-redux'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[hash].js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel', // The module to load. "babel" is short for "babel-loader"
      exclude: [node_modules_dir]
    },{
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};

module.exports = config;
