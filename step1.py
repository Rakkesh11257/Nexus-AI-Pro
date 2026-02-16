import sys
path = '/Users/rakkeshraja/Downloads/nexus-ai-pro-final-2/frontend/src/App.jsx'
with open(path, 'r') as f:
    code = f.read()
old = """const I2I_MODELS = [
  { id: 'qwen/qwen-image', name: 'Qwen Image', desc: 'LoRA + img2img', nsfw: false },
  { id: 'google/nano-banana-pro', name: 'Google Nano Banana Pro', desc: 'Google img2img', nsfw: false },
  { id: 'stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4', name: 'Stable Diffusion 1.5', desc: 'Classic img2img', nsfw: false, useVersion: true },
  { id: 'stability-ai/sdxl:7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc', name: 'SDXL 1.0', desc: 'SDXL img2img', nsfw: false, useVersion: true },
];"""
new = """const I2I_MODELS = [
  { id: 'sdxl-based/consistent-character:9c77a3c2f884193fcee4d89645f02a0b9def9434f9e03cb98460456b831c8772', name: 'Consistent Character', desc: '$0.038/run (~\u20b93.20/run)', nsfw: true, useVersion: true },
  { id: 'zsxkib/instant-id:2e4785a4d80dadf580077b2244c8d7c05d8e3faac04a04c02d8e099dd2876789', name: 'Instant-ID Pro', desc: '$0.031/run (~\u20b92.60/run)', nsfw: true, useVersion: true },
  { id: 'minimax/image-01', name: 'minimax/image-01', desc: '$0.01/image (~\u20b90.84/image)', nsfw: false, isMinimax: true },
  { id: 'zedge/instantid:ba2d5293be8794a05841a6f6eed81e810340142c3c25fab4838ff2b5d9574420', name: 'InstantID', desc: '$0.0015/run (~\u20b90.13/run)', nsfw: true, useVersion: true },
  { id: 'qwen/qwen-image', name: 'Qwen Image', desc: '$0.025/image (~\u20b92.10)', nsfw: false },
];
const FACESWAP_MODELS = [
  { id: 'cdingram/face-swap:d1d6ea8c8be89d664a07a457526f7128109dee7030fdac424788d762c71ed111', name: 'cdingram/face-swap', desc: '$0.014/run (~\u20b91.17/run)', nsfw: true, useVersion: true },
  { id: 'codeplugtech/face-swap:278a81e7ebb22db98bcba54de985d22cc1abeead2754eb1f2af717247be69b34', name: 'codeplugtech/face-swap', desc: '$0.0025/run (~\u20b90.21/run)', nsfw: true, useVersion: true },
];
const UPSCALE_MODELS = [
  { id: 'nightmareai/real-esrgan', name: 'nightmareai/real-esrgan', desc: '$0.002/image (~\u20b90.17/image)', nsfw: true },
  { id: 'philz1337x/crystal-upscaler', name: 'philz1337x/crystal-upscaler', desc: '$0.05-3.20/image (~\u20b94.20-268/image)', nsfw: true },
];
const SKIN_MODELS = [
  { id: 'fofr/kontext-make-person-real:3f0b0f59a22997052c144a76457f113f7c35f6573b9f994f14367ec35f96254d', name: 'fofr/kontext-make-person-real', desc: '$0.018/run (~\u20b91.51/run)', nsfw: true, useVersion: true },
  { id: 'flux-kontext-apps/change-haircut', name: 'flux-kontext-apps/change-haircut', desc: '$0.04/image (~\u20b93.35/image)', nsfw: true, isHaircut: true },
  { id: 'zsxkib/ic-light:d41bcb10d8c159868f4cfbd7c6a2ca01484f7d39e4613419d5952c61562f1ba7', name: 'zsxkib/ic-light', desc: '$0.011/image (~\u20b90.92/image)', nsfw: true, useVersion: true, isICLight: true },
];
const V2V_MODELS = [
  { id: 'runwayml/gen4-aleph', name: 'runwayml/gen4-aleph', desc: '$0.18/sec (~\u20b915.10/sec)', nsfw: false },
  { id: 'xai/grok-imagine-video', name: 'xai/grok-imagine-video', desc: '$0.05/sec (~\u20b94.20/sec)', nsfw: false, isGrokV2V: true },
  { id: 'kwaivgi/kling-o1', name: 'kwaivgi/kling-o1', desc: '$0.126-0.168/sec (~\u20b910.60-14.10/sec)', nsfw: false, isKlingO1: true },
];
const VIDEOFS_MODELS = [
  { id: 'xrunda/hello:104b4a39315349db50880757bc8c1c996c5309e3aa11286b0a3c84dab81fd440', name: 'Video Face Swap', desc: '~$0.12/run', price: '$0.12', useVersion: true },
];"""
if old not in code:
    print("ERROR")
    sys.exit(1)
code = code.replace(old, new)
with open(path, 'w') as f:
    f.write(code)
print(f"OK {len(code)}")
