const { DynamoDBClient, ScanCommand } = require('/var/www/nexus-ai-pro/node_modules/@aws-sdk/client-dynamodb');
const { SESClient, SendEmailCommand } = require('/var/www/nexus-ai-pro/node_modules/@aws-sdk/client-ses');
const fs = require('fs');

const dynamodb = new DynamoDBClient({ region: 'ap-south-1' });
const ses = new SESClient({ region: 'ap-south-1' });

const htmlBody = fs.readFileSync('/tmp/email-template.html', 'utf8');

async function run() {
  // Scan all users
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

  // Filter out users without email
  const emails = users.filter(u => u.email && u.email.S).map(u => u.email.S);
  console.log('Total users with email: ' + emails.length);

  let success = 0, errors = 0, skipped = 0;

  for (let i = 0; i < emails.length; i++) {
    const email = emails[i];
    
    // Skip obviously invalid emails
    if (!email.includes('@') || email.includes('test@')) {
      skipped++;
      continue;
    }

    try {
      await ses.send(new SendEmailCommand({
        Source: 'NEXUS AI Pro <credits@nexus-ai-pro.com>',
        Destination: { ToAddresses: [email] },
        Message: {
          Subject: { Data: '🎁 90 Free Credits Just Hit Your Account — NEXUS AI Pro', Charset: 'UTF-8' },
          Body: {
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
    
    // Small delay to respect SES rate limit (14/sec)
    if ((i+1) % 10 === 0) await new Promise(r => setTimeout(r, 1000));
  }

  console.log('=== COMPLETE ===');
  console.log('Total: ' + emails.length + ', Success: ' + success + ', Errors: ' + errors + ', Skipped: ' + skipped);
}

run();
