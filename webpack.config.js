const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // 确保 src/index.js 文件存在
  output: {
    filename: 'worker.js', // 输出的文件名
    path: path.resolve(__dirname, './dist'), // 输出文件路径
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.html?$/i,
        type: 'asset/source',
      },
      {
        test: /\.(gif|png)$/i,
        type: 'asset/inline',
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },
  plugins: [new CleanWebpackPlugin()],
};
