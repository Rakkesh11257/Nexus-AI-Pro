#!/bin/bash
# Run this to decode the App.jsx
cd /Users/rakkeshraja/Downloads/nexus-ai-pro-final-2/frontend/src
base64 -d App.jsx.b64 > App.jsx
rm App.jsx.b64
echo "App.jsx decoded successfully! $(wc -c < App.jsx) bytes"
