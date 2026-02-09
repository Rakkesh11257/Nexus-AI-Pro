#!/bin/bash
# Concatenate parts to build App.jsx
TARGET=/Users/rakkeshraja/Downloads/nexus-ai-pro-final-2/frontend/src/App.jsx
DIR=/Users/rakkeshraja/Downloads/nexus-ai-pro-final-2/frontend/src

cat "$DIR/p2.jsx" >> "$TARGET"
cat "$DIR/p3.jsx" >> "$TARGET"
cat "$DIR/p4.jsx" >> "$TARGET"
cat "$DIR/p5.jsx" >> "$TARGET"
echo "Combined! Size: $(wc -c < "$TARGET") bytes"
rm -f "$DIR/p2.jsx" "$DIR/p3.jsx" "$DIR/p4.jsx" "$DIR/p5.jsx"
