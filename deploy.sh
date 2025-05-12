#!/bin/bash
echo "Webhook triggered at $(date)" >> webhook.log
git pull origin main >> webhook.log 2>&1
npm install >> webhook.log 2>&1
npm run build >> webhook.log 2>&1
pm2 restart revolynk-website >> webhook.log 2>&1
rm -rf _nuxt >> webhook.log 2>&1
mv .nuxt/dist/client/_nuxt ./ >> webhook.log 2>&1
