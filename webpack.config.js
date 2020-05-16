const path = require('path')
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: "./source",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [ '@babel/preset-env' ]
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [ '@babel/preset-env', '@babel/react' ]
        }
      }
    ],
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: "bundle.js"
  }
}
