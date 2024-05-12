const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8083,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "practice",
      filename: "remoteEntry.js",
      exposes: {
        "./PracticeIndex": "./src/bootstrap",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
