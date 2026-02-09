#!/usr/bin/env python3
import base64, sys, os

b64_path = os.path.join(os.path.dirname(__file__), 'App.jsx.b64')
out_path = os.path.join(os.path.dirname(__file__), 'App.jsx')

with open(b64_path, 'r') as f:
    b64 = f.read().strip()

data = base64.b64decode(b64)
with open(out_path, 'wb') as f:
    f.write(data)

os.remove(b64_path)
print(f"Decoded {len(data)} bytes to App.jsx")
