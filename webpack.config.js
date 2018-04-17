var path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[hash].css",
    disable: process.env.NODE_ENV === "development"
});

const ASSET_PATH = '/assets/'; //process.env.ASSET_PATH || '/';

module.exports = {
  // entry: "./src/index.jsx",
  // output: {
  //   filename: "main.js",
  //   path: path.resolve(__dirname, "js"),
  //   publicPath: ASSET_PATH
  // },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["env", "react"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
  plugins: [
    htmlWebpackPlugin,
    extractSass
  ]
};
