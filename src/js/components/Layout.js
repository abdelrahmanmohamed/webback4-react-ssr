const Layout = ({ body, styles, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
      <script src="http://localhost:3000/client.js"></script>
    </body>
  </html>
`;

export default Layout;
