const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
var dotenv = require('dotenv').config({path: __dirname + '/.env'});

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
  showErrors: true,
});

module.exports = {
  entry: ["./src/bootstrap.tsx"],
  output: {
    filename: "bundle.js",
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader"
      },
      {
        test:/\.(s*)css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
    ]
  },
  plugins: [
    htmlPlugin,
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed
    }),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
