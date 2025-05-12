const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const { exec } = require('child_process');

const app = express();
const secret = 'REVOLYNK$github@2025';

function verifySignature(req, res, buf) {
  const signature = req.headers['x-hub-signature-256'];
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(buf);
  const digest = `sha256=${hmac.digest('hex')}`;
  if (signature !== digest) {
    throw new Error('Invalid signature');
  }
}

app.use(bodyParser.json({ limit: '1mb', verify: verifySignature }));

app.post('/hooks/github', (req, res) => {
  console.log('✅ Webhook received');

  // Respond immediately so GitHub doesn't time out
  res.status(200).send('OK');

  // Run deploy script in background
  exec('sh ./deploy.sh >> deploy.log 2>&1', (err) => {
    if (err) {
      console.error('❌ Deploy failed. See deploy.log for details.');
    } else {
      console.log('✅ Deploy completed');
    }
  });
});

app.listen(4000, () => {
  console.log('🚀 Webhook listener running on port 4000');
});
