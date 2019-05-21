const path = require('path');

module.exports = {
  mode:'production',
  entry: './src/index.ts',
  devtool: 'source-map',
  devServer: {
    open: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bizarre.js',
    path: path.resolve(__dirname, 'dist')
  }
};
