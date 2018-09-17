// webpack.config.04.js
const path = require('path')

module.exports = {
    // code splitting example .
  entry: {
    app: './src/index.js'
  },
  output: {
    // we'll output
    filename: '[name].bundle.js',
    path:  __dirname + '/dist/js'

  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  // run some js through babel
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader', // run the .js file you found through the babel transpiler
            options: {
              babelrc: true
            }
          }
        ]
      }
    ]
  },

  // webpack-dev-server configuration
  devServer: {
    contentBase: './dist', // webroot
    watchContentBase: true,
    publicPath: '/js',
    compress: false,
    port: 9000
  }
}
