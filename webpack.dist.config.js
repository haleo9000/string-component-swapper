const path = require('path');

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'string-component-swapper.min.js',
    library: 'ReactStringComponentSwapper',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    // Use external version of React
    react: 'React',
    'react-dom': 'ReactDOM',
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
      }
    ],
  },
};