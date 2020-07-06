const React = require('react');
const If = require('../../../components/dist/If');

const TemplateOne = env => (
  <div className="template-one">
    <If env={env} condition={2 === 2}>
      <div className="inner-div">Holas</div>
    </If>
  </div>
);

module.exports = env => TemplateOne(env);