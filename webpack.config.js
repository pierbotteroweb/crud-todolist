var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './app/App.js',
    output:{
        path: path.resolve(__dirname, "./"),
        filename:'bundle.js'
    },

    devServer:{
        inline: true,
        contentBase:"./",
        port:3333
    },
    mode:'production',
    watch:true,
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
        },
        { 
          test: /\.css$/,          
          exclude: /node_modules/, 
          use: ['style-loader', 'css-loader', 'postcss-loader'] 
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ]
  };
  