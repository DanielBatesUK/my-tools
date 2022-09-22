// ################################################################################################

// My Imports
import timeStamp from '../lib/time_stamp.mjs';

// ################################################################################################

// Route - Index
function routeVideoCapture(req, res) {
  try {
    console.log(`${timeStamp()} - Processing HTTP ${req.method} request for '${req.path}' as 'video-capture'`);
    const page_options = {
      page_heading: 'Video Capture',
      url_query: JSON.stringify(req.query),
    }
    res.render(process.env.VIEW_VIDEO_CAPTURE, page_options);
    res.end();
  } catch (error) {
    console.error(error);
    res.send(`${timeStamp()} - Index error`);
    res.end();
  }
}

// ################################################################################################

// Exports
export default routeVideoCapture;