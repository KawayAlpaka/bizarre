const path = require('path');

module.exports = {
  mode:'production',
  entry: {
    'bizarre': './src/index.ts',
    'bizarre-web': './src/index-web.ts',
    'bizarre-node': './src/index-node.ts'
  },
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
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
