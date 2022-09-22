// ################################################################################################

// Route - Index
function routeGitHubWebhook(req, res) {
  try {
    console.log(`Processing HTTP ${req.method} request for '${req.path}' as 'GitHub Webhook'`);
    console.log('Github Webhook', req.body);
    res.status(200).send('{"status":200}');
    res.end();
  } catch (error) {
    console.error(error);
    res.send('Index error');
    res.end();
  }
}

// ################################################################################################

// Exports
export default routeGitHubWebhook;
