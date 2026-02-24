const { DynamoDBClient, ScanCommand, UpdateItemCommand } = require('/var/www/nexus-ai-pro/node_modules/@aws-sdk/client-dynamodb');
const client = new DynamoDBClient({ region: 'ap-south-1' });

async function run() {
  let users = [];
  let lastKey = undefined;
  do {
    const res = await client.send(new ScanCommand({
      TableName: 'nexus-ai-pro-users',
      ProjectionExpression: 'userId',
      ExclusiveStartKey: lastKey
    }));
    users.push(...res.Items);
    lastKey = res.LastEvaluatedKey;
  } while (lastKey);
  
  console.log('Found ' + users.length + ' users');
  let success = 0, errors = 0;
  
  for (let i = 0; i < users.length; i++) {
    try {
      await client.send(new UpdateItemCommand({
        TableName: 'nexus-ai-pro-users',
        Key: { userId: users[i].userId },
        UpdateExpression: 'ADD credits :c',
        ExpressionAttributeValues: { ':c': { N: '45' } }
      }));
      success++;
    } catch(e) {
      console.log('Error:', users[i].userId.S, e.message);
      errors++;
    }
    if ((i+1) % 100 === 0) console.log('Progress: ' + (i+1) + '/' + users.length);
  }
  console.log('Done! Success: ' + success + ', Errors: ' + errors);
}
run();
