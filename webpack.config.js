const webpack = require("webpack");

module.exports = {
  entry: {
    sample: "./sample.js", 
    app: "./src/app.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },
  watch: true,
  devServer: {
    inline: true,
    hot: true
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}