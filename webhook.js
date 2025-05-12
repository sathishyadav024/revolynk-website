import express from 'express';
import bodyParser from 'body-parser';
import crypto from 'crypto';
import { exec } from 'child_process';

const app = express();
const secret = 'REVOLYNK$github@2025';  // This must match the secret you set in GitHub webhook settings

app.use(bodyParser.json());

app.post('/hooks/github', (req, res) => {
  const sig = req.headers['x-hub-signature-256'];
  const hmac = crypto.createHmac('sha256', secret);
  const digest = 'sha256=' + hmac.update(JSON.stringify(req.body)).digest('hex');

  // Verify signature to confirm it's from GitHub
  if (sig !== digest) {
    return res.status(403).send('Invalid signature.');
  }

  // Run the deploy script
  exec('./deploy.sh', (err, stdout, stderr) => {
    if (err) {
      console.error(stderr);
      return res.status(500).send('Deployment error');
    }
    console.log(stdout);
    res.status(200).send('Deployed!');
  });
});

app.listen(4000, () => {
  console.log('Webhook listener running on port 4000');
});

