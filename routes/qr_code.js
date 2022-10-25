// ################################################################################################

// Route - Index
function routeQRCode(req, res) {
  try {
    console.log(`Processing HTTP ${req.method} request for '${req.path}' as 'qr-code'`);
    res.render('qr_code');
    res.end();
  } catch (error) {
    console.error(error);
    if (!res.writableEnded) {
      res.send('QR-code error');
      res.end();
    }
  }
}

// ################################################################################################

// Exports
export default routeQRCode;
