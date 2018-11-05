const webpack = require('webpack');
const { join } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = join(__dirname, 'dist');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:3000',
    './src/index',
  ],
  output: {
    filename: 'bundle.js',
    path: buildPath,
    publicPath: '/',
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
        },
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('autoprefixer')({
                    browsers: ['last 2 versions'],
                  }),
                ],
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            },
          ],
        }),
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'static/images/[name].[ext]',
          }
        }],
      },
      {
        test: /\.([ot]tf|woff)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'static/fonts/[name].[ext]',
          },
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: true,
    }),
  ]
};