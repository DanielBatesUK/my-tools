// ################################################################################################

// Imports
import crypto from 'crypto';
import { exec } from 'child_process';

// ################################################################################################

// Route - GitHub Webhooks
function routeGitHubWebhook(req, res) {
  try {
    console.log(`Processing HTTP ${req.method} request for '${req.path}' as 'GitHub Webhook'`);
    const secret = process.env.SESSION_SECRET;
    const expectedSignature = `sha1=${crypto.createHmac('sha1', secret).update(JSON.stringify(req.body)).digest('hex')}`;
    const receivedSignature = req.headers['x-hub-signature'];
    if (receivedSignature !== expectedSignature) throw Error('Signature mismatch from GitHub Webhook');
    console.log('Signature from GitHub Webhook verified successfully');
    console.log('GitHub Webhook', req.body);
    res.status(200).send('{"status":200}');
    res.end();
  } catch (error) {
    console.error(error);
    res.status(403).send(`{"github_webhook: {"error": "${error}"}`);
    res.end();
  }
}

// ################################################################################################

// Exports
export default routeGitHubWebhook;
