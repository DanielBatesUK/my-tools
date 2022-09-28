// ################################################################################################

// Route - Index
function routeIndex(req, res) {
  try {
    console.log(`Processing HTTP ${req.method} request for '${req.path}' as 'index'`);
    const pageOptions = {
      page_title: 'Index',
      page_content: 'Hello World!',
    };
    res.render('index', pageOptions);
    res.end();
  } catch (error) {
    console.error(error);
    res.send('Index error');
    res.end();
  }
}

// ################################################################################################

// Exports
export default routeIndex;
