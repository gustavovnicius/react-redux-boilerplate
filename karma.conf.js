process.env.NODE_ENV = 'test'

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      { pattern: 'specs/tests.webpack.js', watched: false },
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'specs/tests.webpack.js': ['webpack'],
    },
    reporters: ['dots'],
    webpack: {
      module: {
        loaders: [{
          test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
          loader: 'babel', // The module to load. "babel" is short for "babel-loader"
          exclude: /node_modules/
        },{
          test: /\.scss$/,
          loader: 'style!css!sass'
        }]
      },
      watch: true,
    },
    webpackServer: {
      noInfo: true,
    },
  });
};
