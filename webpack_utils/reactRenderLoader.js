const requireFromString = require('require-from-string');
const renderer = require('react-dom/server');
const { getOptions } = require('loader-utils');

module.exports = function loader(source) {
  // file being processed as string
  let code = source;

  const { env } = getOptions(this);

  if (env !== 'development') { // grails replacements
    code = code.replace(/condition: (.*)?([\s\,])/, 'condition: "$1"$2');
  }

  console.log('---- render component ----')
  console.log('code\n', code);
  console.log('resourcePath', this.resourcePath);

  // requires a module from its string representation
  const module = requireFromString(code, this.resourcePath);
  console.log('module', module);

  const component = module(env);
  console.log('component', component);

  const renderedComponent = renderer.renderToStaticMarkup(component)
  console.log('renderedComponent', renderedComponent);
  console.log('---- render finished ----')

  return renderedComponent;
};