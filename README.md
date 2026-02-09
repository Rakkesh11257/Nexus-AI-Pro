# NEXUS AI Pro v4.0

## 🚀 Ultimate AI Image & Video Generation Platform

Professional AI generation tool with unrestricted content support via RunPod integration.

---

## 📋 Table of Contents

1. [Features](#-features)
2. [System Requirements](#-system-requirements)
3. [Installation Guide](#-installation-guide)
   - [Windows](#windows-setup)
   - [macOS](#macos-setup)
   - [Linux](#linux-setup)
4. [Getting API Keys](#-getting-api-keys)
5. [Configuration](#-configuration)
6. [Running the App](#-running-the-app)
7. [Optional: Add More AI Models](#-optional-add-more-ai-models)
8. [Bonus: FaceSwap with Roop-Unleashed](#-bonus-faceswap-with-roop-unleashed-runpod)
9. [Hosting on VPS](#-hosting-on-vps-for-mobile-access)
10. [Troubleshooting](#-troubleshooting)
11. [API Costs](#-api-costs)
12. [Support](#-support)

---

## ✨ Features

- 🖼️ **Image Generation** - FLUX Schnell, FLUX Dev, FLUX Pro, SDXL
- 🎬 **Video Generation** - Wan 2.2, Stable Video Diffusion, MiniMax
- 🔓 **Unrestricted Content** - Via RunPod integration (no filters)
- ⚡ **Fast Generation** - Optimized API calls
- 💾 **Auto-Save** - All generations saved locally
- 📱 **Responsive UI** - Works on desktop and mobile browsers

---

## 💻 System Requirements

| Requirement | Minimum |
|-------------|---------|
| **Operating System** | Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+) |
| **Node.js** | Version 18.0 or higher |
| **npm** | Version 9.0 or higher |
| **RAM** | 4 GB |
| **Storage** | 500 MB free space |
| **Internet** | Required (for API calls) |

---

## 📥 Installation Guide

### Windows Setup

#### Step 1: Install Node.js

1. Go to: **https://nodejs.org**
2. Download the **LTS version** (e.g., 20.x.x)
3. Run the installer (.msi file)
4. Check ✅ "Automatically install necessary tools"
5. Click **Next** through all steps
6. Click **Install**
7. Restart your computer

#### Step 2: Verify Node.js Installation

1. Press `Win + R`, type `cmd`, press Enter
2. Type these commands:
```cmd
node --version
```
Should show: `v18.x.x` or higher

```cmd
npm --version
```
Should show: `9.x.x` or higher

#### Step 3: Extract the Package

1. Right-click the ZIP file
2. Select **"Extract All..."**
3. Choose a location (e.g., `C:\Users\YourName\Documents\nexus-ai-pro`)
4. Click **Extract**

#### Step 4: Open Command Prompt in Project Folder

**Method 1:**
1. Open the extracted folder in File Explorer
2. Click the address bar
3. Type `cmd` and press Enter

**Method 2:**
1. Press `Win + R`
2. Type `cmd` and press Enter
3. Navigate to folder:
```cmd
cd C:\Users\YourName\Documents\nexus-ai-pro
```

#### Step 5: Install Dependencies

Run these commands one by one:

```cmd
npm install
```
Wait for it to complete (may take 2-3 minutes)

```cmd
cd frontend
npm install
npm run build
cd ..
```

#### Step 6: Configure API Keys

**⚠️ Can't see .env files? They're hidden by default!**

**Show hidden files in Windows:**
1. Open File Explorer
2. Click **"View"** tab at top
3. Check ✅ **"Hidden items"**
4. Now you can see `.env.example`

**Or use Command Prompt:**
```cmd
copy .env.example .env
notepad .env
```

**Create .env file:**
1. In the project folder, find `.env.example`
2. Make a copy and rename it to `.env`
   - Right-click → Copy
   - Right-click → Paste
   - Rename from `.env.example - Copy` to `.env`
3. Open `.env` with Notepad
4. Add your API keys (see [Getting API Keys](#-getting-api-keys))
5. Save and close

#### Step 7: Start the App

```cmd
npm start
```

#### Step 8: Open in Browser

Go to: **http://localhost:3000**

---

### macOS Setup

#### Step 1: Install Node.js

**Option A: Direct Download**
1. Go to: **https://nodejs.org**
2. Download the **LTS version** for macOS
3. Open the .pkg file
4. Follow installation wizard
5. Click **Install**

**Option B: Using Homebrew (Recommended)**
1. Open Terminal (Cmd + Space, type "Terminal")
2. Install Homebrew (if not installed):
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
3. Install Node.js:
```bash
brew install node
```

#### Step 2: Verify Node.js Installation

Open Terminal and run:
```bash
node --version
npm --version
```

#### Step 3: Extract the Package

1. Double-click the ZIP file to extract
2. Move the folder to your desired location (e.g., Documents)

#### Step 4: Open Terminal in Project Folder

**Method 1:**
1. Open Finder
2. Navigate to the extracted folder
3. Right-click the folder
4. Select **"New Terminal at Folder"**

**Method 2:**
1. Open Terminal
2. Type `cd ` (with space)
3. Drag the folder into Terminal
4. Press Enter

#### Step 5: Install Dependencies

```bash
npm install
cd frontend && npm install && npm run build && cd ..
```

#### Step 6: Configure API Keys

**⚠️ Can't see .env files? They're hidden by default!**

**Show hidden files in macOS:**
- Press `Cmd + Shift + .` (period) in Finder
- This toggles hidden files on/off

**Create .env file:**
```bash
cp .env.example .env
nano .env
```

Or open with TextEdit:
```bash
open -e .env
```

Add your API keys, save, and close.

#### Step 7: Start the App

```bash
npm start
```

#### Step 8: Open in Browser

Go to: **http://localhost:3000**

---

### Linux Setup

#### Step 1: Install Node.js

**Ubuntu/Debian:**
```bash
# Update package list
sudo apt update

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version
npm --version
```

**Fedora/RHEL:**
```bash
sudo dnf install nodejs npm
```

**Arch Linux:**
```bash
sudo pacman -S nodejs npm
```

#### Step 2: Extract the Package

```bash
unzip nexus-ai-pro-v4.0.zip -d ~/nexus-ai-pro
cd ~/nexus-ai-pro
```

#### Step 3: Install Dependencies

```bash
npm install
cd frontend && npm install && npm run build && cd ..
```

#### Step 4: Configure API Keys

**⚠️ Can't see .env files? They're hidden by default!**

**Show hidden files in Linux:**
- Press `Ctrl + H` in file manager
- Or use `ls -la` in terminal to see all files

**Create .env file:**
```bash
cp .env.example .env
nano .env
```

Add your API keys, then press `Ctrl + X`, `Y`, `Enter` to save.

#### Step 5: Start the App

```bash
npm start
```

#### Step 6: Open in Browser

Go to: **http://localhost:3000**

---

## 🔑 Getting API Keys

### Replicate API Key (Required)

Replicate provides access to FLUX and video models.

1. Go to: **https://replicate.com**
2. Click **"Sign in"** or **"Sign up"**
3. Create account with GitHub or email
4. After login, click your profile icon (top right)
5. Click **"API tokens"**
6. Click **"Create token"**
7. Copy the token (starts with `r8_`)
8. Paste into your `.env` file:
   ```
   REPLICATE_API_KEY=r8_your_token_here
   ```

**Replicate Pricing:**
- Pay-as-you-go
- ~$0.003 - $0.05 per image
- ~$0.05 per video
- No monthly minimum

---

### RunPod API Key (Optional - For Unrestricted Content)

RunPod lets you run your own GPU with no content filters.

#### Step 1: Create Account
1. Go to: **https://runpod.io**
2. Click **"Sign Up"**
3. Create account
4. Add billing/credits ($10 minimum)

#### Step 2: Get API Key
1. Click your profile icon
2. Go to **"Settings"**
3. Click **"API Keys"**
4. Click **"Create API Key"**
5. Copy the key (starts with `rpa_`)

#### Step 3: Create ComfyUI Endpoint (For FLUX)
1. Go to **"Serverless"** in left menu
2. Click **"+ New Endpoint"**
3. Search for **"ComfyUI"** template
4. Select GPU: **RTX 4090** (recommended)
5. Set **Max Workers**: 1
6. Click **"Create"**
7. Copy the **Endpoint ID** (e.g., `abc123xyz`)

#### Step 4: Create A1111 Endpoint (For SDXL)
1. Go to **"Serverless"** → **"+ New Endpoint"**
2. Search for **"Automatic1111"** or **"SDXL"** template
3. Select GPU: **RTX 4090**
4. Set **Max Workers**: 1
5. Click **"Create"**
6. Copy the **Endpoint ID**

#### Step 5: Add to .env
```
RUNPOD_API_KEY=rpa_your_key_here
RUNPOD_ENDPOINT_ID=your_comfyui_endpoint_id
RUNPOD_A1111_ENDPOINT_ID=your_a1111_endpoint_id
```

**RunPod Pricing:**
- ~$0.40/hour for RTX 4090
- Only charged when generating
- Workers auto-sleep when idle

---

## ⚙️ Configuration

Your `.env` file should look like this:

```env
# ==========================================
# NEXUS AI Pro v4.0 - Configuration
# ==========================================

# REPLICATE (Required)
REPLICATE_API_KEY=r8_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# RUNPOD (Optional - for unrestricted content)
RUNPOD_API_KEY=rpa_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
RUNPOD_ENDPOINT_ID=your_comfyui_endpoint
RUNPOD_A1111_ENDPOINT_ID=your_a1111_endpoint

# SERVER
PORT=3000
```

---

## ▶️ Running the App

### Start the Server

**Windows (Command Prompt):**
```cmd
cd C:\path\to\nexus-ai-pro
npm start
```

**macOS/Linux (Terminal):**
```bash
cd ~/nexus-ai-pro
npm start
```

### Access the App

Open browser and go to: **http://localhost:3000**

### Stop the Server

Press `Ctrl + C` in the terminal/command prompt.

---

## 🔧 Optional: Add More AI Models

You can extend NEXUS AI Pro with additional models by editing `backend/server.js`.

### Add Fal.ai Models (Premium Quality)

1. Get API key from: **https://fal.ai/dashboard/keys**

2. Add to `.env`:
```env
FAL_API_KEY=your_fal_api_key_here
```

3. Edit `backend/server.js` and add to MODELS object:
```javascript
'kling-fal': {
  name: 'Kling 1.6 (Fal.ai)', type: 'img2vid',
  description: 'Best quality video',
  model: 'fal-ai/kling-video/v1.6/pro/image-to-video',
  nsfw: true, provider: 'fal',
  supportsPrompt: true
},
```

4. Add FalService class (contact support for code)

---

### Add Custom LoRA (Your Own Trained Face)

1. Train a LoRA on Replicate:
   - Go to: **https://replicate.com/ostris/flux-dev-lora-trainer/train**
   - Upload 15-20 photos of the face
   - Set trigger word (e.g., "MYFACE")
   - Wait for training (~30 mins)

2. Get your LoRA URL from Replicate

3. Add to `.env`:
```env
CUSTOM_LORA_URL=https://replicate.delivery/your_lora_url
CUSTOM_LORA_TRIGGER=MYFACE
```

4. Add to MODELS in `backend/server.js`:
```javascript
'custom-lora': {
  name: 'My Custom Face',
  category: 'Custom LoRA',
  description: 'Your trained face - use MYFACE in prompt',
  model: 'lucataco/flux-dev-lora:xyz...',
  nsfw: true, isFlux: true, isLora: true, provider: 'replicate',
  triggerWord: 'MYFACE'
},
```

---

### Add More Replicate Models

Browse models at: **https://replicate.com/explore**

Example - Add Stable Diffusion 3:
```javascript
'sd3': {
  name: 'Stable Diffusion 3',
  category: 'General',
  description: 'Latest SD model',
  model: 'stability-ai/stable-diffusion-3',
  nsfw: false, provider: 'replicate'
},
```

---

## 🎭 Bonus: FaceSwap with Roop-Unleashed (RunPod)

You can set up a powerful face-swapping tool on RunPod for high-quality deepfakes.

### Step 1: Create a RunPod GPU Pod

1. Go to: **https://runpod.io/console/pods**
2. Click **"+ Deploy"**
3. Select **RTX 4090** (recommended) or **RTX 3090**
4. Choose template: **RunPod Pytorch 2.1** or **Ubuntu 22.04 CUDA**
5. Set volume disk: **20 GB** minimum
6. Click **"Deploy"**

### Step 2: Connect to Pod

1. Once running, click **"Connect"**
2. Click **"Start Web Terminal"** or use SSH

### Step 3: Run Installation Command

Copy and paste this entire command:

```bash
apt-get update && apt-get install -y ffmpeg libgl1-mesa-glx libglib2.0-0 && apt-get install -y libcudnn9-cuda-12 && git clone https://codeberg.org/roop-unleashed/roop-unleashed.git && cd roop-unleashed && pip install --upgrade pip && pip install onnxruntime-gpu && pip install -r requirements.txt && python run.py --cuda_device_id 0 --server_share
```

This will:
- Install required dependencies (FFmpeg, CUDA libraries)
- Clone Roop-Unleashed repository
- Install Python packages
- Start the web interface with public URL

### Step 4: Access the Web UI

After installation completes, you'll see a URL like:
```
Running on public URL: https://xxxxxxxx.gradio.live
```

Open this URL in your browser to access Roop-Unleashed!

### Using Roop-Unleashed

1. **Upload source face** - The face you want to use
2. **Upload target image/video** - Where to put the face
3. **Select face enhancer** - GFPGAN or CodeFormer recommended
4. **Click Start** - Processing begins
5. **Download result** - Save your swapped media

### Tips for Best Results

- Use high-quality source face images (front-facing, good lighting)
- Source and target faces should have similar angles
- For videos, use **GFPGAN** enhancer for better quality
- RTX 4090 processes ~10 seconds of video per minute

### Costs

| GPU | Cost/Hour | Speed |
|-----|-----------|-------|
| RTX 3090 | ~$0.30 | Good |
| RTX 4090 | ~$0.40 | Fast |
| A100 | ~$1.00 | Fastest |

**Remember:** Stop your pod when not in use to avoid charges!

---

## 🌐 Hosting on VPS (For Mobile Access)

To use NEXUS AI Pro from your phone or anywhere:

### Option 1: Vultr VPS ($6/month)

1. Sign up at: **https://vultr.com**
2. Deploy Ubuntu 22.04 server
3. SSH into server:
```bash
ssh root@your_server_ip
```
4. Install Node.js:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```
5. Upload your files (using FileZilla or scp)
6. Install and run:
```bash
cd nexus-ai-pro
npm install
cd frontend && npm install && npm run build && cd ..
npm start
```
7. Access via: **http://your_server_ip:3000**

### Option 2: Use PM2 for Auto-Restart

```bash
npm install -g pm2
pm2 start backend/server.js --name nexus
pm2 save
pm2 startup
```

---

## 🔧 Troubleshooting

### "node: command not found"
**Solution:** Node.js not installed. Follow installation steps above.

### "npm ERR! code ENOENT"
**Solution:** You're in the wrong folder. `cd` to the project folder.

### "Cannot find module 'express'"
**Solution:** Run `npm install` in the project folder.

### "REPLICATE_API_KEY not configured"
**Solution:** 
1. Check `.env` file exists (not `.env.example`)
2. Check API key is correct
3. Restart the server

### "Error: listen EADDRINUSE: address already in use :::3000"
**Solution:** Port 3000 is in use. Either:
- Close other apps using port 3000
- Change PORT in `.env` to 3001

### Images not generating
**Solutions:**
1. Check API key is valid
2. Check Replicate account has credits
3. Check internet connection

### RunPod not working
**Solutions:**
1. Check endpoint is active (not stopped)
2. Check endpoint ID is correct
3. Check RunPod account has credits
4. Check worker has started (takes 30-60 seconds on first request)

### Frontend shows blank page
**Solution:** Rebuild frontend:
```bash
cd frontend
npm run build
cd ..
npm start
```

---

## 💰 API Costs

### Replicate Pricing

| Model | Cost per Generation |
|-------|---------------------|
| FLUX Schnell | ~$0.003 |
| FLUX Dev | ~$0.025 |
| FLUX 1.1 Pro | ~$0.055 |
| Wan 2.2 I2V (Video) | ~$0.05 |
| Wan 2.2 T2V (Video) | ~$0.05 |
| MiniMax Video | ~$0.10 |
| Stable Video Diffusion | ~$0.05 |

### RunPod Pricing

| GPU | Cost per Hour |
|-----|---------------|
| RTX 3090 | ~$0.30 |
| RTX 4090 | ~$0.40 |
| A100 | ~$1.00 |

*Workers only charge when actively generating. Auto-sleep after idle.*

---

## 📁 File Structure

```
nexus-ai-pro/
├── backend/
│   └── server.js          # Main API server
├── frontend/
│   ├── src/               # React source code
│   ├── dist/              # Built frontend (after npm run build)
│   └── package.json
├── outputs/
│   ├── images/            # Generated images saved here
│   └── videos/            # Generated videos saved here
├── .env                   # Your configuration (create from .env.example)
├── .env.example           # Example configuration
├── package.json           # Project dependencies
└── README.md              # This file
```

---

## 📞 Support

### Before Contacting Support:

1. ✅ Read this README completely
2. ✅ Check Troubleshooting section
3. ✅ Verify API keys are correct
4. ✅ Check you have credits in Replicate/RunPod

### Get Help:

- 💬 Discord: https://discord.gg/E3YxM8cZ
- 

---

## 📝 Changelog

### v4.0 (Current)
- Added RunPod ComfyUI integration for FLUX
- Added RunPod A1111 integration for SDXL
- Added video generation (Wan 2.2, MiniMax, SVD)
- Improved UI/UX
- Better error handling

### v3.0
- Added custom LoRA support
- Added face swap feature

### v2.0
- Added video generation
- Added Kling & Wan models

### v1.0
- Initial release
- Basic image generation

---

## 📄 License

This software is licensed for personal and commercial use. You may:
- ✅ Use for personal projects
- ✅ Use for commercial projects
- ✅ Sell content you generate
- ✅ Modify the code for your needs

You may NOT:
- ❌ Resell or redistribute this software
- ❌ Share your copy with others
- ❌ Claim this as your own creation

---

**Enjoy creating with NEXUS AI Pro! 🎨🚀**
