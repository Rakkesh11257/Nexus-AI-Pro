// ─── Shared Styles ───
const S = {
  page: { minHeight: '100vh', background: '#060608', color: '#f0f0f5', fontFamily: "'Outfit', system-ui, -apple-system, sans-serif", WebkitTextSizeAdjust: '100%' },
  gradientText: { fontSize: 26, fontWeight: 700, color: '#22d47b', marginTop: 12 },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(6,6,8,0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 50, gap: 8 },
  container: { maxWidth: 900, margin: '0 auto', padding: '16px 10px' },
  tabs: { display: 'flex', gap: 4, overflowX: 'auto', paddingBottom: 4, paddingRight: 30, WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none' },
  card: { maxWidth: 420, margin: '16px auto', padding: '24px 18px', background: '#111827', borderRadius: 14, border: '1px solid #1f2937', boxShadow: '0 8px 32px rgba(0,0,0,0.4)', boxSizing: 'border-box' },
  field: { marginBottom: 14 },
  label: { display: 'block', fontSize: 13, color: '#9ca3af', marginBottom: 5, fontWeight: 500 },
  input: { width: '100%', padding: '11px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, color: '#f0f0f5', fontSize: 16, boxSizing: 'border-box', outline: 'none', WebkitAppearance: 'none', fontFamily: "'Outfit', system-ui, sans-serif" },
  select: { padding: '10px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, color: '#f0f0f5', fontSize: 14, cursor: 'pointer', outline: 'none', WebkitAppearance: 'none', maxWidth: '100%', boxSizing: 'border-box', fontFamily: "'Outfit', system-ui, sans-serif" },
  btn: { width: '100%', padding: '13px', background: '#22d47b', border: 'none', borderRadius: 8, color: '#060608', fontSize: 15, fontWeight: 700, cursor: 'pointer', WebkitTapHighlightColor: 'transparent', boxShadow: '0 0 20px rgba(34,212,123,0.2)' },
  btnSm: { padding: '6px 14px', background: '#111827', border: '1px solid #333', borderRadius: 6, color: '#ccc', fontSize: 13, cursor: 'pointer', WebkitTapHighlightColor: 'transparent' },
  link: { color: '#22d47b', cursor: 'pointer', fontWeight: 600 },
  eyeIcon: { position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', fontSize: 16, userSelect: 'none' },
  errorBox: { padding: '12px 16px', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 8, marginBottom: 14, color: '#fca5a5', fontSize: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  successBox: { padding: '12px 16px', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: 8, marginBottom: 14, color: '#86efac', fontSize: 14 },
  closeBtn: { position: 'absolute', top: 12, right: 12, background: '#1f2937', border: 'none', color: '#888', width: 28, height: 28, borderRadius: '50%', cursor: 'pointer', fontSize: 14 },
  overlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 12 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(180px, 100%), 1fr))', gap: 10, marginTop: 16 },
  gridCard: { background: '#111827', borderRadius: 10, overflow: 'hidden', border: '1px solid #1f2937', cursor: 'pointer', transition: 'border-color 0.2s' },
};

export default S;
