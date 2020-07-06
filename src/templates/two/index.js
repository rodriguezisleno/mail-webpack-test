const React = require('react');
const If = require('../../../components/dist/If');

const TemplateTwo = env => (
  <div className="template-two">
    <If env={env} condition={2 === 2}>
      <div className="inner-div">Holas</div>
    </If>
  </div>
);

module.exports = env => TemplateTwo(env);