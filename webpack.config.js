const path = require('path')
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: "./source",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: [ 'env' ]
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: [ 'env', 'react' ]
        }
      }
    ],
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: "bundle.js"
  }
}
