// ################################################################################################

// Route - Aspect Ratio Calculator
function routeAspectRatioCalculator(req, res) {
  try {
    console.log(`Processing HTTP ${req.method} request for '${req.path}' as 'aspect-ratio-calculator'`);
    res.render('aspect_ratio_calculator');
    res.end();
  } catch (error) {
    console.error(error);
    if (!res.writableEnded) {
      res.send('Aspect-ratio-calculator error');
      res.end();
    }
  }
}

// ################################################################################################

// Exports
export default routeAspectRatioCalculator;
