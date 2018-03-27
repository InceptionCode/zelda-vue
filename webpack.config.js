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
      },
      {
        test: /.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader"
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        use:["style-loader","css-loader","postcss-loader","sass-loader"]
      },
      {
        test: /\.(png|jpg|gif|ttf|eot)$/,
        exclude: /node_modules/,
        use: "url-loader?limit-8192"
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  }
}