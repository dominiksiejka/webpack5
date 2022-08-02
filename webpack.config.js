const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[contenthash:4]-bundle.js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "images/[hash:6][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.txt$/i,
        type: "asset/source",
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        type: "asset/inline",
      },
      {
        test: /\.js$/i,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/i,
        use: ["babel-loader", "ts-loader"],
        exclude: /^node_modules$/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./src/template.html" }),
    new MiniCssExtractPlugin({ filename: "[contenthash:4]-styles.css" }),
  ],
  devtool: "source-map",
  devServer: {
    open: true,
    host: "192.168.0.178",
    port: 3000,
    hot: true,
    static: {
      directory: path.resolve(__dirname, "public"),
    },
  },
}
