// ################################################################################################

// Route - IP Address
function routeIPAddress(req, res) {
  try {
    console.log(`Processing HTTP ${req.method} request for '${req.path}' as 'ip-address'`);
    const pageOptions = {
      ipAddress: req.headers['x-forwarded-for'],
    };
    res.render('ip_address', pageOptions);
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
export default routeIPAddress;
