const requireFromString = require('require-from-string');
const renderer = require('react-dom/server');
const NODE_ENV = require('process').env.NODE_ENV;

module.exports = function loader(source) {
  let code = source;
  if (NODE_ENV !== 'development') {
      code = code.replace(/condition: (.*)?([\s\,])/, 'condition: "$1"$2');
  }
  console.log('---- render component ----')
  console.log('code\n', code);
  console.log('resourcePath', this.resourcePath);
  const component = requireFromString(code, this.resourcePath);
  const renderedComponent = renderer.renderToStaticMarkup(component)
  console.log('renderedComponent', renderedComponent);
  console.log('---- render finished ----')
  return renderedComponent;
};
