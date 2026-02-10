#!/bin/bash
# ============================================
# NEXUS AI Pro - Vultr Server Setup Script
# Run this ON the Vultr server after SSH'ing in
# ============================================

set -e

echo ">>> Updating system..."
apt update && apt upgrade -y

echo ">>> Installing Node.js 22..."
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs

echo ">>> Installing PM2 (process manager)..."
npm install -g pm2

echo ">>> Installing Nginx..."
apt install -y nginx

echo ">>> Installing Certbot (SSL)..."
apt install -y certbot python3-certbot-nginx

echo ">>> Creating app directory..."
mkdir -p /var/www/nexus-ai-pro
chown -R $USER:$USER /var/www/nexus-ai-pro

echo ">>> Setting up firewall..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

echo ""
echo "============================================"
echo "  System setup complete!"
echo "  Next steps:"
echo "  1. Clone your repo into /var/www/nexus-ai-pro"
echo "  2. Run deploy/install.sh"
echo "  3. Configure Nginx with deploy/nginx.conf"
echo "  4. Get SSL certificate"
echo "============================================"
