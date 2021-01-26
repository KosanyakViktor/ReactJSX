const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  output: {
   path: path.resolve(__dirname, "review_build"),
   filename: "[name].[hash].js"
  },
  module: {
    rules: [
    {
      test: /.js$/,
      use: ["babel-loader"]
    },
      {
        test: /.css$/,
        use: ["style-loader","css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:"./src/index.html"
    })
  ]
}