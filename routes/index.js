// ################################################################################################

// Route - Index
function routeIndex(req, res) {
  try {
    console.log(`Processing HTTP ${req.method} request for '${req.path}' as 'index'`);
    res.render('index');
    res.end();
  } catch (error) {
    console.error(error);
    if (!res.writableEnded) {
      res.send('Index error');
      res.end();
    }
  }
}

// ################################################################################################

// Exports
export default routeIndex;
