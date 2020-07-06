const React = require('react');

/**
 * Given an env and an array of components,
 * builds the proper Component for that env 
 * @prop {String} env the execution environment
 * @prop {Array} components Array of { environment: String, component: Component }
 */
const ComponentBuilder = ({ components, env, ...props }) => {
  for (const environment of ['development', 'production-grails']) {
    if (!components.some(component => component.environment === environment)) {
      throw new Error(`You must implement a component for each environment. The component for ${environment} couldn't be found`);
    }
  }

  const Component = components.find(component => component.environment === env).component;

  return (
    <Component {...props} />
  );
};

module.exports = ComponentBuilder;
