const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const { exec } = require('child_process');
const app = express();

const secret = 'REVOLYNK$github@2025';

// Middleware to verify GitHub signature
function verifySignature(req, res, buf) {
  const signature = req.headers['x-hub-signature-256'];
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(buf);
  const digest = `sha256=${hmac.digest('hex')}`;
  if (signature !== digest) {
    throw new Error('Invalid signature');
  }
}

// Use body-parser with raw body verification
app.use(bodyParser.json({ limit: '1mb', verify: verifySignature }));

// GitHub webhook endpoint
app.post('/hooks/github', (req, res) => {
  console.log('✅ Webhook received');

  // Respond to GitHub immediately to avoid timeout
  res.status(200).send('OK');

  // Run deploy.sh asynchronously and log output
  exec('sh ./deploy.sh >> deploy.log 2>&1', (err) => {
    if (err) {
      console.error('❌ Deployment failed. Check deploy.log for details.');
    } else {
      console.log('✅ Deployment triggered successfully.');
    }
  });
});

// Start the server
app.listen(4000, () => {
  console.log('🚀 Webhook listener running on port 4000');
});
