#!/bin/bash
# ============================================
# NEXUS AI Pro - App Install & Build Script
# Run this inside /var/www/nexus-ai-pro after cloning
# ============================================

set -e

echo ">>> Installing backend dependencies..."
npm install --production

echo ">>> Installing frontend dependencies & building..."
cd frontend
npm install
npx vite build
cd ..

echo ">>> Setting up AWS credentials..."
mkdir -p ~/.aws

# Check if credentials already exist
if [ ! -f ~/.aws/credentials ]; then
  echo ">>> AWS credentials not found. Please enter them:"
  read -p "AWS Access Key ID: " AWS_KEY
  read -p "AWS Secret Access Key: " AWS_SECRET
  cat > ~/.aws/credentials << EOF
[default]
aws_access_key_id = $AWS_KEY
aws_secret_access_key = $AWS_SECRET
EOF
  cat > ~/.aws/config << EOF
[default]
region = ap-south-1
output = json
EOF
  echo ">>> AWS credentials saved."
else
  echo ">>> AWS credentials already exist."
fi

echo ">>> Setting up environment file..."
if [ ! -f .env.production ]; then
  cat > .env.production << EOF
PORT=3000
NODE_ENV=production
RAZORPAY_KEY_ID=rzp_live_SCpCGFak928F7f
RAZORPAY_KEY_SECRET=sAaMXrCyXwMAVxIHfqgaQFA1
EOF
  echo ">>> .env.production created. Edit it with production Razorpay keys if needed."
else
  echo ">>> .env.production already exists."
fi

echo ">>> Starting with PM2..."
pm2 delete nexus-ai-pro 2>/dev/null || true
pm2 start backend/server.js --name nexus-ai-pro --env production --node-args="--max-http-header-size=65536"
pm2 save
pm2 startup

echo ""
echo "============================================"
echo "  App is running on port 3000!"
echo "  PM2 status: pm2 status"
echo "  PM2 logs:   pm2 logs nexus-ai-pro"
echo "  Next: Configure Nginx & SSL"
echo "============================================"
