// webpack.config.04.js
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'

// $ npm install --save-dev html-webpack-plugin

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    // we'll output
    filename: '[name].bundle.js',
    path:  __dirname + '/dist'

  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

    // we'll build our html from this template below (we can customize it to use a templating language )
    // when runing webpack, generates dist/index.html
    // when using webpack-dev-server , the index.html file isn't generated. it's just
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/templates/index.html'
    })
  ],

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
      },

      {
        test: /\.css$/,
        use: [

          devMode ? 'style-loader' :
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            },

          // import css from 'file.css'
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },

          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
        ]
      }
    ]
  },

  // webpack-dev-server configuration
  devServer: {
    contentBase: './dist', // webroot
    watchContentBase: true,
    publicPath: '/',
    compress: false,
    port: 9000
  }
}
