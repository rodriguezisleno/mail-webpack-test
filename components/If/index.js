const React = require('react');
const NODE_ENV = require('process').env.NODE_ENV;

class ComponentSelector {
  constructor(components) {
    for (const environment of ['development', 'production-grails']) {
      if(!components.some(component => component.environment === environment)) {
        throw new Error(`You must implement a component for each environment. The component for ${environment} couldn't be found`);
      }
    }
    this.components = components;
    this.select = this.select.bind(this);
  }

  select(environment) {
    return this.components.find(component => component.environment === environment).component;
  }
};

class If extends React.PureComponent {
  render() {
    const { condition, children } = this.props;
    console.log('hello from development');
    return condition && children;
  }
}

class GrailsIf extends React.PureComponent {
  render() {
    const { condition, children } = this.props;
    console.log('hello from grails production');
    return React.createElement('g:if', { test: `\${${condition}}` }, children);
  }
}

const componentSelector = new ComponentSelector([
  { environment: 'development', component: If },
  { environment: 'production-grails', component: GrailsIf}
]);

module.exports = componentSelector.select(NODE_ENV)