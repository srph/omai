var webpack = require('webpack');
var mode = process.env.MODE;
var noop = function() { }

module.exports = {
  entry: './src/App.jsx',
  output: {
    filename: 'script.js', // Filename of the output,
    path: './dist' // Path of the output
  },
  module: {
    // Transformers
    loaders: [
      // Transform to es6 with babel
      // http://webpack.github.io/docs/loaders.html
      { test: /\.(js|jsx|es6)$/, exclude: /node_modules/, loader: "babel-loader?modules=common&experimental=true" }
    ]
  },
  resolve: {
    // So we can `require` files without specifying file ext
    // e.g., require('./yolo.es6') => require('./yolo');
    extensions: ['', '.js', '.json', '.jsx', '.es6']
  },
  plugins: [
    mode !== undefined && mode == "production" ? new webpack.optimize.UglifyJsPlugin({ mangle: true, compress: true }) : noop
  ]
};