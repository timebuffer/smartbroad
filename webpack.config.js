const path = require('path');

module.exports = {
  target: 'node',
  rules: [
    // ...other rules
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }
  ],
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
    },
    alias: {
      'vue$': 'vue/dist/vue.esm-bundler.js' // Depending on your Vue version
    }
  },

  plugins: [
    // ...other plugins
    new VueLoaderPlugin()
  ],
  
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
