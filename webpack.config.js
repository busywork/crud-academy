const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
