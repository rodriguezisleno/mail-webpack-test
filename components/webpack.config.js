const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    If: './src/If/If.js',
    ComponentBuilder: './src/ComponentBuilder/ComponentBuilder.js',
  },
  output: {
    filename: '[name]/index.js',
    path: __dirname + '/dist',
    library: 'components',
    libraryTarget: 'commonjs2',
    globalObject: 'this',
  },
  externals: {
    react: 'react',
  },
  module: {
    rules: [
      {
        test: /src\/.*\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            }
          }
        ]
      }
    ]
  }
};