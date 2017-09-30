var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlwebpackPlugin = require('html-webpack-plugin');//html 模板生成器
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
        bundle:'./index.js'
  },
  output: {
    publicPath :'/',
    filename: '[name].js'
  },
  plugins: [
    new OpenBrowserPlugin({
      url: 'http://localhost:9093'//自动打开网页
    }),
    new HtmlwebpackPlugin({//在dist目录下自动生成index.html
      inject: true,
      template: 'index.html',
    }),
  ],

  module: {
    loaders: [
      {test: /\.(css|less)$/,loader: 'style-loader!css-loader!less-loader',},
      {test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015!eslint-loader?configFile=.eslintrc' },
      {test: /\.(png|jpg|gif|jepg)$/, loader: 'url-loader?limit=8192' },
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,loader: "url-loader?limit=10000&mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,loader: "url-loader?limit=10000&mimetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,loader: "file-loader"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,loader: "url-loader?limit=10000&mimetype=image/svg+xml"}
    ]
  }
};