// ################################################################################################

// Route - Lorem Ipsum
function routeLoremIpsum(req, res) {
  try {
    console.log(`Processing HTTP ${req.method} request for '${req.path}' as 'lorem-ipsum'`);
    res.render('lorem_ipsum');
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
export default routeLoremIpsum;
