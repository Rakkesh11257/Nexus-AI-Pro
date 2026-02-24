const { DynamoDBClient, ScanCommand } = require('/var/www/nexus-ai-pro/node_modules/@aws-sdk/client-dynamodb');
const { SESClient, SendEmailCommand } = require('/var/www/nexus-ai-pro/node_modules/@aws-sdk/client-ses');
const fs = require('fs');

const dynamodb = new DynamoDBClient({ region: 'ap-south-1' });
const ses = new SESClient({ region: 'ap-south-1' });

const htmlBody = fs.readFileSync('/tmp/email-template.html', 'utf8');

const textBody = `NEXUS AI Pro
India's First BYOK AI Platform

90 Free Credits Just Hit Your Account

We've added 90 free credits to your NEXUS AI Pro account. No catch, no expiry - just our way of saying thanks for being an early supporter.

Use them to generate images, videos, or try any of our 63+ AI models. Pay only for what you use - no fixed monthly limits.

>> Use My Credits: https://app.nexus-ai-pro.com


WHY CREATORS CHOOSE NEXUS
--------------------------

Pay As You Go - No Fixed Limits
Buy credits and use them whenever you want. No monthly caps, no wasted subscriptions. Your credits never expire. We handle the API infrastructure - you just create.

63+ AI Models in One Platform
FLUX, SDXL, Wan 2.2/2.5, Ideogram V3, Consistent Character, Face Swap, Video Upscaler, LoRA Training, and many more - all accessible from one dashboard.

Concurrent Generation
Don't wait for one image to finish. Run multiple generations at the same time - images, videos, upscaling - all in parallel. Maximize your output.

Built for Adult Content Creators
NEXUS AI Pro is specifically designed for adult content creators. NSFW-capable models included in Credit Mode and Yearly Developer Mode. Full creative freedom with no content filters on supported models.

Developer Mode - Bring Your Own Key
India's first BYOK platform. Subscribe, plug in your Replicate API key, and get unlimited generations at Replicate's direct pricing. No markup, full control.


LAUNCH OFFER - 25% OFF ALL PLANS
Credit packs from Rs.149 | Developer Mode from Rs.499/mo | Valid till March 10

>> Explore All 63+ Models: https://app.nexus-ai-pro.com


FOLLOW US ON INSTAGRAM
We're now on Instagram! Follow us for tips, AI showcases, and free credits giveaways.
>> @nexusaipro_official: https://instagram.com/nexusaipro_official


HELP US IMPROVE
Found a bug? Have a feature request? Want something improved?
We'd love to hear from you.
>> Email us: support@nexus-ai-pro.com


---
You're receiving this because you have a NEXUS AI Pro account.
nexus-ai-pro.com | support@nexus-ai-pro.com | Instagram: @nexusaipro_official
(c) 2026 NEXUS AI Pro. India's first BYOK AI platform. All rights reserved.`;

async function run() {
  let users = [];
  let lastKey = undefined;
  do {
    const res = await dynamodb.send(new ScanCommand({
      TableName: 'nexus-ai-pro-users',
      ProjectionExpression: 'email',
      ExclusiveStartKey: lastKey
    }));
    users.push(...res.Items);
    lastKey = res.LastEvaluatedKey;
  } while (lastKey);

  const emails = users.filter(u => u.email && u.email.S).map(u => u.email.S);
  console.log('Total users with email: ' + emails.length);

  let success = 0, errors = 0, skipped = 0;

  for (let i = 0; i < emails.length; i++) {
    const email = emails[i];
    
    if (!email.includes('@') || email.includes('test@')) {
      skipped++;
      continue;
    }

    try {
      await ses.send(new SendEmailCommand({
        Source: 'NEXUS AI Pro <credits@nexus-ai-pro.com>',
        Destination: { ToAddresses: [email] },
        Message: {
          Subject: { Data: '90 Free Credits Just Hit Your Account - NEXUS AI Pro', Charset: 'UTF-8' },
          Body: {
            Text: { Data: textBody, Charset: 'UTF-8' },
            Html: { Data: htmlBody, Charset: 'UTF-8' }
          }
        }
      }));
      success++;
    } catch(e) {
      console.log('Error sending to ' + email + ': ' + e.message);
      errors++;
    }

    if ((i+1) % 50 === 0) console.log('Progress: ' + (i+1) + '/' + emails.length + ' (success: ' + success + ', errors: ' + errors + ')');
    
    if ((i+1) % 10 === 0) await new Promise(r => setTimeout(r, 1000));
  }

  console.log('=== COMPLETE ===');
  console.log('Total: ' + emails.length + ', Success: ' + success + ', Errors: ' + errors + ', Skipped: ' + skipped);
}

run();
