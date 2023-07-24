const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpeg|jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'styles/[name].[ext]',
          outputPath: 'styles/icons', // 이미지가 저장될 출력 디렉토리
          publicPath: 'styles/icons',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.png'],
  },
  plugins: [new CleanWebpackPlugin()],
};
