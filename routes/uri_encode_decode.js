// ################################################################################################

// Route - URI Encode/Decode
function routeURIEncodeDecode(req, res) {
  try {
    console.log(`Processing HTTP ${req.method} request for '${req.path}' as 'uri-encode-decode'`);
    res.render('uri_encode_decode');
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
export default routeURIEncodeDecode;
