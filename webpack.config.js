const path = require('path');

module.exports = {
  target: 'node',
  resolve: {
    fallback: {
      "buffer": false,
      "fs": false,
      "http": false,
      "https": false,
      "net": false,
      "url": false,
      "util": false,
      "zlib": false
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
