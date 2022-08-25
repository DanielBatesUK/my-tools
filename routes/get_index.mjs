// ################################################################################################

// My Imports
import timeStamp from '../lib/time_stamp.mjs';

// ################################################################################################

// Route - Index
function routeIndex(req, res) {
  try {
    console.log(`${timeStamp()} - Processing HTTP ${req.method} request for '${req.path}' as 'index'`);
    const page_options = {
      page_heading: 'Index',
      page_content: 'Hello World!'
    }
    res.render(process.env.VIEW_INDEX, page_options);
    res.end();
  } catch (error) {
    console.error(error);
    res.send(`${timeStamp()} - Index error`);
    res.end();
  }
}

// ################################################################################################

// Exports
export default routeIndex;
