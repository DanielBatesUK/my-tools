// ################################################################################################

// Route - Index
function routeBlankPage(req, res) {
  try {
    console.log(`Processing HTTP ${req.method} request for '${req.path}' as 'blank-page'`);
    const pageOptions = {
      page_title: 'Blank page',
      page_favicon: 'checkbox-blank-outline.png',
      page_content: 'Hello World!',
    };
    res.render('blank_page', pageOptions);
    res.end();
  } catch (error) {
    console.error(error);
    if (!res.writableEnded) {
      res.send('Blank-page error');
      res.end();
    }
  }
}

// ################################################################################################

// Exports
export default routeBlankPage;
