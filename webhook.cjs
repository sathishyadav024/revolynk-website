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

// Set limit and verify raw body for GitHub
app.use(bodyParser.json({ limit: '1mb', verify: verifySignature }));

app.post('/hooks/github', (req, res) => {
  console.log('✅ Webhook received');

  exec('sh ./deploy.sh', (err, stdout, stderr) => {
    if (err) {
      console.error('❌ Deploy failed:', stderr);
      return res.status(500).send('Deployment error');
    }
    console.log('✅ Deploy output:', stdout);
    res.status(200).send('Deployment triggered');
  });
});

app.listen(4000, () => {
  console.log('🚀 Webhook listener running on port 4000');
});
