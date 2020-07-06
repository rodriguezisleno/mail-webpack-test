const HtmlWebpackPlugin = require('html-webpack-plugin');
const juice = require('juice');

class InlineCssPlugin {
  apply(compiler) {
    // Hooks into Webpack's compilation event in order to access compilation object
    compiler.hooks.compilation.tap('InlineCssPlugin', compilation => {
      // Hooks into HtmlWebpackPlugin's beforeEmit event in order to access the html
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'InlineCssPlugin',
        (data, callback) => {
          console.log('InlineCssPlugin');
          // Process the styles using Juice (https://github.com/Automattic/juice)
          data.html = juice(data.html);
          callback(null, data);
        }
      );
    });
  }
}

module.exports = InlineCssPlugin;
