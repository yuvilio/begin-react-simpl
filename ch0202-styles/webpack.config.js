// webpack.config.04.js
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

// basic css loading:
// $ npm install --save-dev css-loader style-loader

// various latests css features via postcss . a "babel" of the css world
// $ npm install --save-dev postcss postcss-loader postcss-import postcss-preset-env postcss-nested postcss-extend postcss-calc postcss-custom-properties postcss-custom-media postcss-color-function postcss-color-hex-alpha postcss-selector-not postcss-selector-matches postcss-media-minmax postcss-mixins postcss-custom-selectors

// extract to separate css file (rather than within the bundle.js)
// handy when you don't need styles in js styled-components
// $ npm install --save-dev mini-css-extract-plugin

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
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
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

          // when in dev mode just add the css styles to the js bundle in memory
          // when using webpack (not webpack-dev-server), generate a separate /dist/app.css stylesheet:
          devMode ? 'style-loader' :
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
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

          // enhance with all sorts of modern css features using various postcss plugins
          // see postcss.config.js file for which plugins are being used
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
