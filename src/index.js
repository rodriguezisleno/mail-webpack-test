const React = require('react');
const If = require('../components/dist/If');

const MyTemplate = env => (
  <If env={env} condition={2 === 2}>
    <div>Holas</div>
  </If>
);

module.exports = env => MyTemplate(env);
