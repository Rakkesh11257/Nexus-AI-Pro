#!/usr/bin/env python3
"""Assembles App.jsx from base64 chunk files"""
import base64, os, glob

src_dir = os.path.dirname(os.path.abspath(__file__))
chunks = sorted(glob.glob(os.path.join(src_dir, 'App.jsx.b64.*')))

if not chunks:
    print("No chunk files found! Looking for App.jsx.b64.* files")
    exit(1)

b64_data = ''
for c in chunks:
    with open(c, 'r') as f:
        b64_data += f.read().strip()

decoded = base64.b64decode(b64_data)
target = os.path.join(src_dir, 'App.jsx')
with open(target, 'wb') as f:
    f.write(decoded)

# Clean up chunks and this script
for c in chunks:
    os.remove(c)

print(f"Successfully wrote App.jsx ({len(decoded)} bytes)")
print(f"Expected: 44379 bytes")
print(f"Match: {len(decoded) == 44379}")
