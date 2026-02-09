#!/bin/bash

# NEXUS AI Pro - Setup Script for Mac/Linux

echo "✨ NEXUS AI Pro - Setup"
echo "========================"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found!"
    echo "Please install Node.js from https://nodejs.org"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js 18+ required (you have v$NODE_VERSION)"
    exit 1
fi
echo "✅ Node.js $(node -v)"

# Install backend dependencies
echo ""
echo "📦 Installing backend dependencies..."
npm install --include=optional

# Ensure sharp is built for this platform
echo ""
echo "🔧 Configuring sharp for your system..."
npm rebuild sharp 2>/dev/null || npm install --os=$(uname -s | tr '[:upper:]' '[:lower:]') --cpu=$(uname -m | sed 's/x86_64/x64/' | sed 's/aarch64/arm64/') sharp

# Verify sharp works
if node -e "require('sharp')" 2>/dev/null; then
    echo "✅ Sharp configured successfully"
else
    echo "⚠️  Sharp setup issue — trying full reinstall..."
    rm -rf node_modules/sharp node_modules/@img/sharp-*
    npm install sharp
fi

# Install and build frontend
echo ""
echo "📦 Installing frontend dependencies..."
cd frontend
npm install

echo ""
echo "🔨 Building frontend..."
npm run build
cd ..

# Check for .env
if [ ! -f ".env" ]; then
    echo ""
    echo "📝 Creating .env from template..."
    cp .env.example .env
    echo "⚠️  Please edit .env and add your API keys!"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env and add your REPLICATE_API_KEY"
echo "2. Run: npm start"
echo "3. Open: http://localhost:3000"
echo ""
