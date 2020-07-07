const React = require('react');
const If = require('../../../components/dist/If');
const getContent = require('./content');

const TemplateOne = (env, siteId) => {
  const CONTENT = getContent(siteId);

  return (
    <table cellPadding={0} cellSpacing={0}>
      <tr>
        <td>
          <p>{CONTENT.title}</p>
        </td>
        {siteId === 'MLB' && (
          <td>
            <p>This is in only for MLB: {CONTENT.mlbText}</p>
          </td>
        )}
        <td>
          <div className="template-one">
            <If env={env} condition={2 === 2}>
              <div className="inner-div">Holas</div>
            </If>
          </div>
        </td>
      </tr>
    </table>
  );
};

module.exports = (env, siteId) => TemplateOne(env, siteId);
