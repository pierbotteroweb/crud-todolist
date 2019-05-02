var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './app/App.js',
    output:{
        path: path.resolve(__dirname, "./dist"),
        filename:'bundle.js'
    },
    mode:'production',
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/__index.html",
        filename: "./src/_index.html"
      })
    ]
  };
  