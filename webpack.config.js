"use strict";
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
 resolve: {
  extensions: [`.js`, `.jsx`],
 },

 entry: {
  main: ["./src/main.js"],
 },
 node: {
  fs: "empty",
  net: "empty",
 },
 output: {
  path: path.resolve(__dirname, "./build"),
  filename: "[name].js",
 },
 module: {
  rules: [
   {
    test: /\.(js|jsx)$/,
    include: path.resolve(__dirname, "./src"),
    loader: "babel-loader",
   },
   {
    test: /\.css$/,
    loader: "style-loader!css-loader",
   },
  ],
 },
 plugins: [
  new CopyWebpackPlugin([
   {
    context: "./public",
    from: "*.*",
   },
  ]),
  new Dotenv(),
 ],
 devServer: {
  contentBase: "./public",
  host: "localhost",
  port: 3000,
  proxy: {
   "**": "http://localhost:7000",
  },
 },
 devtool: "eval-source-map",
};

// const path = require("path");
// const BrowserSyncPlugin = require("browser-sync-webpack-plugin"); // 설치한 모듈을 가져옴

// module.exports = {
//  entry: path.resolve(__dirname, "./src/main.js"), // 번들 작업할 파일
//  output: {
//   path: path.resolve(__dirname, "build"), // 번들화 된 파일 경로
//   filename: "build.js", // 파일명
//  },
//  module: {
//   rules: [
//    {
//     test: /\.(js|jsx)$/,
//     include: path.resolve(__dirname, "./src"),
//     exclude: /node_modules/,
//     use: {
//      loader: "babel-loader",
//     },
//    },
//   ],
//  },
//  watch: true, // 자동 번들화 작업 여부
//  plugins: [
//   new BrowserSyncPlugin({
//    host: "localhost", // localhost로 사용
//    port: 3000, // 포트 3000을 사용
//    files: ["./public/index.html"], // 해당 경로 내 html 파일이 자동으로 동기화
//    server: { baseDir: ["src"] }, // server의 Base 디렉토리를 build로 지정
//   }),
//  ],
// };
