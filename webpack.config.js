const path = require('path');

module.exports = {
  entry: [
    './example/index.jsx',
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'example'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ]
          }
        }
      }],
    }
  }
};
