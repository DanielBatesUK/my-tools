// ################################################################################################

// Imports
import crypto from 'crypto';
import { execSync } from 'child_process';

// ################################################################################################

// Route - GitHub Webhooks
function routeGitHubWebhook(req, res) {
  try {
    console.log(`Processing HTTP ${req.method} request for '${req.path}' as 'GitHub Webhook'`);
    const secret = process.env.GITHUB_WEBHOOK_SECRET;
    const expectedSignature = `sha1=${crypto.createHmac('sha1', secret).update(JSON.stringify(req.body)).digest('hex')}`;
    const receivedSignature = req.headers['x-hub-signature'];
    // Check Webhook signature
    if (receivedSignature !== expectedSignature) throw Error('Signature mismatch from GitHub Webhook');
    console.log('Signature from GitHub Webhook verified successfully');
    console.log('GitHub Webhook', req.body);
    res.status(200).send('{"status":200}');
    res.end();
    // Check GitHub branch
    const localPath = process.cwd();
    const localBranch = execSync(`cd ${localPath} && git rev-parse --abbrev-ref HEAD`).toString().trim();
    const gitHubPushBranch = req.body.ref.split('/')[2];
    const gitHubDefaultBranch = req.body.repository.default_branch;
    console.log({ localPath, localBranch, gitHubPushBranch, gitHubDefaultBranch });
    // Pull GitHub branch (if default branch)
    if (localBranch === gitHubDefaultBranch && localBranch === gitHubPushBranch) {
      console.log(`Default branch check successful: '${localBranch}'`);
      console.log(`Executing 'git pull' in '${localPath}'`);
      const gitPull = execSync(`cd ${localPath} && git pull`);
      console.log({ gitPull });
      try {
        // Refresh Glitch after 30secs
        console.log('Refreshing Glitch in 30secs');
        setTimeout(() => {
          execSync(`cd ${localPath} && refresh`);
        }, '30000');
      } catch (error) {
        // Do nothing as not on glitch
        console.log('Refresh command failed (are you on Glitch?)');
      }
    } else {
      console.log('Default branch check mismatch:', { localBranch, gitHubPushBranch, gitHubDefaultBranch });
    }
  } catch (error) {
    console.error(error);
    res.status(403).send(`{"github_webhook: {"error": "${error}"}`);
    res.end();
  }
}

// ################################################################################################

// Exports
export default routeGitHubWebhook;
