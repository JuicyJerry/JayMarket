const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build"),
    // path: path.resolve(__dirname, "dist"),
    // publicPath: "/js/",
  },
  devServer: {
    contentBase: path.resolve("./build"),
    index: "index.html",
    port: 8080,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "./dist/css/style.css" }),
    "react-refresh/babel",
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.svg$/,
        loader: "file-loader",
      },
      {
        test: /\.jpg$/,
        loader: "file-loader",
      },
      {
        test: /\.png$/,
        loader: "file-loader",
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // plugins: [new ReactRefreshWebpackPlugin()],
  plugins: [],

  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./src/index.html",
  //     filename: "index.html",
  //     inject: "body",
  //   }),
  // ],
};
