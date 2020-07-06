const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { InlineCssPlugin, template, createEntry, createTemplateParameters } = require('./webpack_utils');

const webpackConfig = (env) => {
  const { webpackEntry, templates } = createEntry({ src: './src/templates' });

  return {
    mode: 'production',
    entry: webpackEntry,
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist', 'trash'),
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /src\/.*\.scss$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].css'
              }
            },
            'extract-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /src\/.*\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].html'
              }
            },
            {
              loader: path.resolve(__dirname, 'webpack_utils/reactRenderLoader.js'),
              options: {
                env,
              }
            },
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new InlineCssPlugin(),
      // the htmlWebpackPlugin requires one instance for each template
      ...templates.map((templateName) => (
        new HtmlWebpackPlugin({
          filename: path.resolve(__dirname, 'dist', `final_template_${templateName}.html`),
          inject: false,
          templateContent: template,
          templateParameters: createTemplateParameters(templateName),
        })
      )),
    ],
  };
}

module.exports = webpackConfig;
