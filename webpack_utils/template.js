const template = ({ reactOutput, styles }) => `
  <html>
    <body>
      <h1>TEMPLATE CONTENT</h1>
      ${reactOutput}
    </body>
    <style>${styles}</style>
  </html>
`;

module.exports = template;
