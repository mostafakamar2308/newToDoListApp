const path = require("path");

module.exports = {
  entry: "/src/index.js",
  output: {
    filename: "main.js",
    publicPath: "",
    path: path.resolve(__dirname, "public"),
  },
  watch: true,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.mp3$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  experiments: {
    topLevelAwait: true,
  },
};
