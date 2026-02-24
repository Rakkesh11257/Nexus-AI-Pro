import boto3

client = boto3.client('dynamodb', region_name='ap-south-1')
paginator = client.get_paginator('scan')

ids = []
for page in paginator.paginate(TableName='nexus-ai-pro-users', ProjectionExpression='userId'):
    ids.extend(item['userId']['S'] for item in page['Items'])

print(f'Found {len(ids)} users')

success = 0
failed = 0

for i, uid in enumerate(ids):
    try:
        client.update_item(
            TableName='nexus-ai-pro-users',
            Key={'userId': {'S': uid}},
            UpdateExpression='ADD credits :c',
            ExpressionAttributeValues={':c': {'N': '45'}}
        )
        success += 1
    except Exception as e:
        failed += 1
        print(f'FAILED: {uid} - {e}')
    if (i+1) % 100 == 0:
        print(f'Progress: {i+1}/{len(ids)}')

print(f'Done! Success: {success}, Failed: {failed}')
