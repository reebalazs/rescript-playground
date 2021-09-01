const path = require("path");
const { NoEmitOnErrorsPlugin } = require("webpack");
const babelConfig = require("./babel.config.js");

const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3031,
    contentBase: dist,
    historyApiFallback: {
      index: "index.html",
    },
  },
  entry: [path.join(src, "GetSchwiftyMain.bs.js")],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "react-hot-loader/webpack",
          {
            loader: "babel-loader",
            options: babelConfig({ cache: () => {} }),
          },
        ],
      },
    ],
  },
  output: {
    path: dist,
    filename: "bundle.js",
  },
  plugins: [new NoEmitOnErrorsPlugin()],
};
