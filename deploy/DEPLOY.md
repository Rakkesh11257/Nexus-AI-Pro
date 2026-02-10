# ============================================
# NEXUS AI Pro — Vultr Deployment Guide
# ============================================

## Prerequisites
- Vultr VPS (Ubuntu 22.04/24.04, min 1GB RAM)
- Domain: nexus-ai-pro.com (with DNS access)
- GitHub repo: https://github.com/Rakkesh11257/Nexus-AI-Pro

---

## Step 1: Create Vultr Server
1. Log into Vultr → Deploy New Server
2. Choose: Cloud Compute → Regular Performance
3. Location: Mumbai (closest to India users)
4. OS: Ubuntu 24.04
5. Plan: $6/mo (1 vCPU, 1GB RAM) or $12/mo (2GB) recommended
6. Add SSH key (or use password)
7. Deploy and note the IP address

---

## Step 2: DNS Setup
Add these DNS records for your domain:

```
Type: A
Name: app
Value: <VULTR_SERVER_IP>
TTL: 300
```

This makes `app.nexus-ai-pro.com` point to your Vultr server.

---

## Step 3: SSH into Server
```bash
ssh root@<VULTR_SERVER_IP>
```

---

## Step 4: Run System Setup
```bash
# Download and run setup script
curl -sL https://raw.githubusercontent.com/Rakkesh11257/Nexus-AI-Pro/main/deploy/setup-vultr.sh | bash
```

Or manually:
```bash
apt update && apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs nginx certbot python3-certbot-nginx
npm install -g pm2
ufw allow OpenSSH && ufw allow 'Nginx Full' && ufw --force enable
```

---

## Step 5: Clone & Install App
```bash
cd /var/www
git clone https://github.com/Rakkesh11257/Nexus-AI-Pro.git nexus-ai-pro
cd nexus-ai-pro
chmod +x deploy/*.sh
bash deploy/install.sh
```

The install script will:
- Install dependencies
- Build frontend
- Set up AWS credentials (you'll be prompted)
- Create .env.production
- Start app with PM2

---

## Step 6: Configure Nginx
```bash
# Copy nginx config
cp deploy/nginx.conf /etc/nginx/sites-available/nexus-ai-pro

# Enable the site
ln -s /etc/nginx/sites-available/nexus-ai-pro /etc/nginx/sites-enabled/

# Remove default site
rm -f /etc/nginx/sites-enabled/default

# Test config
nginx -t

# Reload nginx
systemctl reload nginx
```

Test: Visit `http://app.nexus-ai-pro.com` — should show the app.

---

## Step 7: SSL Certificate (HTTPS)
```bash
certbot --nginx -d app.nexus-ai-pro.com
```
- Enter email
- Agree to terms
- Choose redirect HTTP to HTTPS (option 2)

Test: Visit `https://app.nexus-ai-pro.com` — should show with padlock.

---

## Step 8: Update Landing Page
On your S3 landing page, update the "Get Access" button link to:
```
https://app.nexus-ai-pro.com
```

---

## Step 9: Update Razorpay (Production)
Edit `/var/www/nexus-ai-pro/.env.production` with production prices:
```bash
nano .env.production
```
Update `PLAN_LIFETIME_PRICE` and `PLAN_MONTHLY_PRICE` in server.js when ready for real pricing.

---

## Useful Commands

```bash
# View app logs
pm2 logs nexus-ai-pro

# Restart app
pm2 restart nexus-ai-pro

# Update app (after git push)
cd /var/www/nexus-ai-pro
git pull origin main
cd frontend && npx vite build && cd ..
pm2 restart nexus-ai-pro

# Check status
pm2 status

# Nginx logs
tail -f /var/log/nginx/error.log
```

---

## Architecture

```
User → nexus-ai-pro.com (S3 Landing Page)
          ↓ "Get Access"
       app.nexus-ai-pro.com (Vultr)
          ↓
       Nginx (SSL + Proxy) → :3000 Node.js
          ↓
       Express (Auth + API Relay)
          ↓                    ↓
       AWS Cognito          Replicate API
       + DynamoDB           (user's API key)
          ↓
       Razorpay (Payments)
```
