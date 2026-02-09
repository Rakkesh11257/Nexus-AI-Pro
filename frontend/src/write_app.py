#!/usr/bin/env python3
"""Write App.jsx from embedded base64 data"""
import base64, os, sys

# This script will be called with base64 data piped to stdin
src_dir = os.path.dirname(os.path.abspath(__file__))
target = os.path.join(src_dir, 'App.jsx')

if len(sys.argv) > 1 and sys.argv[1] == '--append':
    mode = 'ab'
else:
    mode = 'wb'

data = sys.stdin.buffer.read()
with open(target, mode) as f:
    f.write(data)

info = os.stat(target)
print(f"{'Appended' if mode == 'ab' else 'Wrote'} to App.jsx (now {info.st_size} bytes)")
