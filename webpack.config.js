const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    "index": "./src/index.js",
    "module-with-dynamic-import": "./src/module-with-dynamic-import.js",
    "common": "./src/common.js",
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["common", "manifest"],
      minChunks: Infinity,
    })
  ],
  output: {
    filename: "[name].js",
    library: ["library", "[name]"],
    path: `${__dirname}/dist/`,
    publicPath: `${__dirname}/dist/`,
  }
};