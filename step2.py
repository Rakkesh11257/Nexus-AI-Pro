path = '/Users/rakkeshraja/Downloads/nexus-ai-pro-final-2/frontend/src/App.jsx'
with open(path,'r') as f: code = f.read()

funcs = open('/Users/rakkeshraja/Downloads/nexus-ai-pro-final-2/gen_funcs.txt').read()

marker = '  // \u2500\u2500\u2500 Render \u2500\u2500\u2500'
if marker not in code:
    print("ERROR: Render marker not found")
    exit(1)
code = code.replace(marker, funcs + '\n\n' + marker)

# Update categoryToolTabs
old_ct = "const categoryToolTabs = { image: 'image', i2i: 'image', i2v: 'image', t2v: 'video', motion: 'video', audio: 'audio', transcribe: 'transcribe', train: 'character', chat: 'chat' };"
new_ct = "const categoryToolTabs = { image: 'image', i2i: 'image', faceswap: 'image', upscale: 'image', skin: 'image', i2v: 'image', t2v: 'video', v2v: 'video', motion: 'video', videofs: 'video', audio: 'audio', transcribe: 'transcribe', train: 'character', chat: 'chat' };"
code = code.replace(old_ct, new_ct)

# Update tabTypes
old_tt = "const tabTypes = { image: ['image'], i2i: ['image'], i2v: ['video'], t2v: ['video'], motion: ['video'], audio: ['audio'], transcribe: ['transcription'] };"
new_tt = "const tabTypes = { image: ['image'], i2i: ['image'], faceswap: ['image'], upscale: ['image'], skin: ['image'], i2v: ['video'], t2v: ['video'], v2v: ['video'], motion: ['video'], videofs: ['video'], audio: ['audio'], transcribe: ['transcription'] };"
code = code.replace(old_tt, new_tt)

# Add tab UIs
tabs_ui = open('/Users/rakkeshraja/Downloads/nexus-ai-pro-final-2/tab_uis.txt').read()
hist = "        {tab === 'history' && ("
code = code.replace(hist, tabs_ui + '\n\n' + hist)

with open(path,'w') as f: f.write(code)
print(f"OK {len(code)}")
