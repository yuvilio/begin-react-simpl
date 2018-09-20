// webpack.config.04.js
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const devMode = process.env.NODE_ENV !== 'production'

const __dist = path.join( __dirname, 'dist' );// /dist directory

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

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/templates/index.html'
    }),

    // need to make some data that you want versioned available to the dist/ ? one approach is to copy it
    // if you run webpack , you'll see data/catalog.json be copied over to  dist/data/catalog.json (copied from ./data/)
    // in webpack-dev-server, it'll be reachable in the server as /data/catalog.json etc (as if it was in the dist diretlry)
    new CopyWebpackPlugin( [
      {
          context: __dirname,
          from   : 'data/**',
          to     : __dist
      }
    ])
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
