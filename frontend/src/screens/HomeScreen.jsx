import React, { useState } from 'react';

// ─── Category definitions with sub-tools ───
const CATEGORIES = [
  {
    id: 'image',
    label: 'Image',
    desc: 'Create, edit, and explore looks.',
    icon: '🎨',
    color: '#22d47b',
    image: '/samples/image-cover.jpg',
    subTools: [
      { id: 'create-image', label: 'Create Image', desc: 'Generate images from text prompts', image: '/samples/create-image.jpg', tab: 'image' },
      { id: 'edit-image', label: 'Edit Image', desc: 'Transform images with AI', image: '/samples/edit-image.jpg', tab: 'i2i' },
    ],
  },
  {
    id: 'video',
    label: 'Video',
    desc: 'Turn prompts and visuals into clips.',
    icon: '🎬',
    color: '#a855f7',
    image: '/samples/video-cover.jpg',
    subTools: [
      { id: 'create-video', label: 'Create Video', desc: 'Generate videos from text', image: '/samples/create-video.jpg', tab: 't2v' },
      { id: 'animate-image', label: 'Animate Image', desc: 'Turn images into video', image: '/samples/animate-image.jpg', tab: 'i2v' },
      { id: 'motion-sync', label: 'Motion Sync', desc: 'Transfer motion between videos', image: '/samples/motion-sync.jpg', tab: 'motion' },
    ],
  },
  {
    id: 'audio',
    label: 'Audio',
    desc: 'Give your worlds a voice.',
    icon: '🔊',
    color: '#f59e0b',
    image: '/samples/audio-cover.jpg',
    subTools: [
      { id: 'text-to-speech', label: 'Text to Speech', desc: 'Convert text to natural speech', image: '/samples/tts.jpg', tab: 'audio' },
      { id: 'music-gen', label: 'Music Generation', desc: 'Create AI music', image: '/samples/music-gen.jpg', tab: 'audio' },
    ],
  },
  {
    id: 'transcribe',
    label: 'Transcribe',
    desc: 'Convert speech to text instantly.',
    icon: '🎙️',
    color: '#ef4444',
    image: '/samples/transcribe-cover.jpg',
    subTools: [
      { id: 'transcribe-audio', label: 'Transcribe Audio', desc: 'Speech to text with AI', image: '/samples/transcribe.jpg', tab: 'transcribe' },
    ],
  },
  {
    id: 'character',
    label: 'Custom Character',
    desc: 'Train and reuse your cast.',
    icon: '🧪',
    color: '#06b6d4',
    image: '/samples/character-cover.jpg',
    subTools: [
      { id: 'train-model', label: 'Train Model', desc: 'Create a custom AI model', image: '/samples/train.jpg', tab: 'train' },
    ],
  },
];

// ─── Placeholder image (gradient fallback when no sample image) ───
function PlaceholderImage({ src, color, icon, style }) {
  const [failed, setFailed] = useState(true);
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', ...style }}>
      {!failed && (
        <img
          src={src} alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <div style={{
          width: '100%', height: '100%',
          background: `linear-gradient(145deg, ${color}20 0%, ${color}08 40%, #0a0a12 100%)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 52, opacity: 0.5,
        }}>
          {icon}
        </div>
      )}
    </div>
  );
}

// ─── Home Screen ───
export default function HomeScreen({ onSelectTool, onSelectCategory }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredSuite, setHoveredSuite] = useState(null);

  return (
    <div style={{ padding: '0 4px', maxWidth: 1200, margin: '0 auto' }}>

      {/* ── Hero ── */}
      <div style={{ textAlign: 'center', padding: '48px 16px 36px' }}>
        <h1 style={{
          fontSize: 'clamp(30px, 5vw, 48px)',
          fontWeight: 800,
          color: '#f0f0f5',
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
          margin: 0,
          fontFamily: "'Outfit', sans-serif",
        }}>
          What would you like<br />
          to <span style={{ color: '#22d47b' }}>create</span> today?
        </h1>
        <p style={{
          color: '#666', fontSize: 15, marginTop: 12, fontWeight: 400,
          letterSpacing: '0.01em',
        }}>
          Unrestricted AI generation — images, videos, audio & more
        </p>
      </div>

      {/* ── Category Cards Row ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 14,
        marginBottom: 40,
      }}>
        {CATEGORIES.map(cat => {
          const isHovered = hoveredCard === cat.id;
          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              onMouseEnter={() => setHoveredCard(cat.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                position: 'relative',
                borderRadius: 16,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isHovered ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
                border: `1.5px solid ${isHovered ? cat.color + '50' : 'rgba(255,255,255,0.06)'}`,
                boxShadow: isHovered
                  ? `0 12px 40px ${cat.color}20, 0 0 0 1px ${cat.color}15`
                  : '0 2px 8px rgba(0,0,0,0.2)',
                background: '#0d0f14',
              }}
            >
              {/* Image area */}
              <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                <PlaceholderImage src={cat.image} color={cat.color} icon={cat.icon} />
                {/* Glow line at bottom of image on hover */}
                <div style={{
                  position: 'absolute', bottom: 0, left: '10%', right: '10%', height: 2,
                  background: isHovered ? cat.color : 'transparent',
                  boxShadow: isHovered ? `0 0 20px ${cat.color}80` : 'none',
                  transition: 'all 0.3s ease',
                  borderRadius: 2,
                }} />
              </div>

              {/* Bottom gradient + label */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(transparent 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.92) 100%)',
                padding: '48px 16px 16px',
              }}>
                <div style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: 4,
                  fontFamily: "'Outfit', sans-serif",
                  background: isHovered ? `linear-gradient(135deg, ${cat.color}, #fff)` : 'none',
                  WebkitBackgroundClip: isHovered ? 'text' : 'unset',
                  WebkitTextFillColor: isHovered ? 'transparent' : '#fff',
                  transition: 'all 0.3s ease',
                }}>
                  {cat.label}
                </div>
                <div style={{ fontSize: 12, color: '#888', lineHeight: 1.35 }}>
                  {cat.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── NEXUS AI Suite (sub-tools grid) ── */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{
          fontSize: 22, fontWeight: 700, color: '#f0f0f5', margin: '0 0 18px',
          fontFamily: "'Outfit', sans-serif",
        }}>
          NEXUS AI Suite
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 12,
        }}>
          {CATEGORIES.flatMap(cat =>
            cat.subTools.map(tool => {
              const isHovered = hoveredSuite === tool.id;
              return (
                <div
                  key={tool.id}
                  onClick={() => onSelectTool(tool.tab)}
                  onMouseEnter={() => setHoveredSuite(tool.id)}
                  onMouseLeave={() => setHoveredSuite(null)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '12px 14px',
                    background: isHovered ? `rgba(${hexToRgb(cat.color)}, 0.04)` : 'rgba(255,255,255,0.015)',
                    border: `1px solid ${isHovered ? cat.color + '35' : 'rgba(255,255,255,0.05)'}`,
                    borderRadius: 14,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {/* Thumbnail */}
                  <div style={{
                    width: 80, height: 80, borderRadius: 12, overflow: 'hidden',
                    flexShrink: 0, background: '#0a0a12',
                    border: `1px solid ${isHovered ? cat.color + '25' : 'rgba(255,255,255,0.04)'}`,
                    transition: 'border-color 0.25s ease',
                  }}>
                    <PlaceholderImage src={tool.image} color={cat.color} icon={cat.icon} />
                  </div>
                  {/* Text */}
                  <div style={{ minWidth: 0 }}>
                    <div style={{
                      fontSize: 14, fontWeight: 600,
                      color: isHovered ? cat.color : '#ddd',
                      marginBottom: 3,
                      transition: 'color 0.2s ease',
                      fontFamily: "'Outfit', sans-serif",
                    }}>
                      {tool.label}
                    </div>
                    <div style={{
                      fontSize: 12, color: '#666', lineHeight: 1.35,
                      overflow: 'hidden', textOverflow: 'ellipsis',
                      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                    }}>
                      {tool.desc}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

// hex color → "r, g, b" for rgba()
function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return [parseInt(h.substring(0,2),16), parseInt(h.substring(2,4),16), parseInt(h.substring(4,6),16)].join(', ');
}

export { CATEGORIES };
