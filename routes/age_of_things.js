// ################################################################################################

// Route - Age of things
function routeAgeOfThings(req, res) {
  try {
    console.log(
      `Processing HTTP ${req.method} request for '${req.path}' as 'age-of-things'`
    );
    res.render('age_of_things');
    res.end();
  } catch (error) {
    console.error(error);
    res.send('Age-of-things error');
    res.end();
  }
}

// ################################################################################################

// Exports
export default routeAgeOfThings;
