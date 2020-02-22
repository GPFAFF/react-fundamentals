const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const environment = process.env.NODE_ENV;

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          environment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: environment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: environment,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          environment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: environment,
            },
          },
        ],
      }
    ]
  },
  mode: environment === 'production' ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "development" ? '[name].css' : '[name].[hash].css',
      chunkFilename: "development" ? '[id].css' : '[id].[hash].css',
    }),
    new CopyPlugin([
      { from: '_redirects' }
    ])
  ],
  devServer: {
    historyApiFallback: true
  }
}
