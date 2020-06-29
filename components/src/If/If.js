const React = require('react');
const ComponentBuilder = require('../ComponentBuilder/ComponentBuilder');

const If = ({ condition, children }) => condition && children;

const GrailsIf = ({ condition, children }) => React.createElement('g:if', { test: `\${${condition}}` }, children);

const components = [
  { environment: 'development', component: If },
  { environment: 'production-grails', component: GrailsIf }
];

const Component = (props) => (
  <ComponentBuilder components={components} {...props} />
);

module.exports = Component;
