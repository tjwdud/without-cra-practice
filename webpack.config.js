// webpack.config.js
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const dotenv = require("dotenv").config();
const path = require("path");

module.exports = {
  entry: { react_app: "./index.js" },
  //파일 확장자 연결
  resolve: { extensions: [".js", ".jsx", ".css"] },
  output: {
    //번들링된 결과가 어디에 저장되는지
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  devServer: {
    host: "localhost",
    port: process.env.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  },
};
