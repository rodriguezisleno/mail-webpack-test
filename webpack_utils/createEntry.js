const { readdirSync, existsSync } = require('fs');

const createEntry = ({ src }) => {
  const templates = [];
  const webpackEntry = {};
  
  readdirSync(src).forEach((templateName) => {
    const template = `${src}/${templateName}/index.js`;
    const styles = `${src}/${templateName}/styles.scss`;
  
    if (existsSync(template) && existsSync(styles)) {
      templates.push(templateName);
      webpackEntry[templateName] = template;
      webpackEntry[`${templateName}_styles`] = styles;
    }
  });

  console.log('webpackEntry: ', webpackEntry);
  console.log('templates:', templates);

  return { templates, webpackEntry };
}

module.exports = createEntry;
