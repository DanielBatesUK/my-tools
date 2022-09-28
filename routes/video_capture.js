// ################################################################################################

// Route - Video Capture
function routeVideoCapture(req, res) {
  try {
    console.log(`Processing HTTP ${req.method} request for '${req.path}' as 'video-capture'`);
    res.render('video_capture');
    res.end();
  } catch (error) {
    console.error(error);
    if (!res.writableEnded) {
      res.send('Video capture error');
      res.end();
    }
  }
}

// ################################################################################################

// Exports
export default routeVideoCapture;
