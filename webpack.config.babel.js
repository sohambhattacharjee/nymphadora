import ExtractCssChunks from "extract-css-chunks-webpack-plugin";
import path from "path";
import webpack from "webpack";

module.exports = env => {
  const config = {
    resolve: {
      extensions: [".js", ".jsx"]
    },
    entry: { bundle: ["./source"] },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.(scss|css)$/,
          use: [
            ExtractCssChunks.loader,
            "css-loader",
            "sass-loader",
            "postcss-loader"
          ]
        },
        {
          test: /\.svg$/,
          loader: "file-loader",
          options: {
            name: "/images/[name].[ext]"
          }
        }
      ]
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    plugins: [
      new ExtractCssChunks({
        hot: env.development ? true : false
      })
    ]
  };

  if (env.development) {
    config.entry.bundle.unshift(
      "react-hot-loader/patch",
      "webpack-hot-middleware/client"
    );
    config.output.filename = "[name].js";
    config.output.publicPath = "http://localhost:3000/dist/";
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return config;
};
