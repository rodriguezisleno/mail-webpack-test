const I18n = require('frontend-i18n');

const getTranslationsForSite = siteId => {
  let filePath = '../../../translations/';
  switch (siteId) {
    case 'MLA':
      filePath += 'es-AR/';
      break;
    case 'MLB':
      filePath += 'pt-BR/';
      break;
    default:
      break;
  }

  filePath += 'messages.json';

  let translations = require(filePath);
  return translations;
};

const getContent = siteId => {
  const translations = getTranslationsForSite(siteId);

  const i18n = new I18n({
    translations,
  });

  const content = {
    title: i18n.gettext('Un titulo muy apropiado'),
    mlbText: i18n.gettext('Dame tu CCB, maldito'),
  };

  return content;
};

module.exports = siteId => getContent(siteId);
