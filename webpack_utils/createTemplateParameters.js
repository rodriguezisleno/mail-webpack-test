/**
 * Get stringified content of an asset from Webpack's compilation
 * @param {Object} Object { compilation: Webpack's compilation, assetRegExp: regular expression that matches the asset name } 
 */
const getAssetFromCompilation = ({ compilation, assetRegExp }) => {
  const { assets } = compilation;

  const assetKey = Object.keys(assets).find(key => key.match(assetRegExp));

  return assets[assetKey]._value.toString();
};

/**
 * @param {String} templateName the name of the template being processed
 * @returns {Function} a function to be called by the HtmlWebpackPlugin that receives the Webpack's compilation and assets
 * and returns the parameters that will be available in the custom template
 */
const createTemplateParameters = templateName => compilation => {
  const reactOutput = getAssetFromCompilation({ compilation, assetRegExp: `${templateName}\/index\.html$` });
  const styles = getAssetFromCompilation({ compilation, assetRegExp: `${templateName}\/styles\.css$` });
  
  return { reactOutput, styles };
};

module.exports = createTemplateParameters;
