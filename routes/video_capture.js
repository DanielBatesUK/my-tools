// ################################################################################################

// Imports

// ################################################################################################

// Route - Index
function routeVideoCapture(req, res) {
  try {
    console.log(`Processing HTTP ${req.method} request for '${req.path}' as 'video-capture'`);
    const pageOptions = {
      page_heading: 'Video Capture',
      url_query: JSON.stringify(req.query),
    };
    res.render('video_capture', pageOptions);
    res.end();
  } catch (error) {
    console.error(error);
    res.send('Index error');
    res.end();
  }
}

// ################################################################################################

// Exports
export default routeVideoCapture;
