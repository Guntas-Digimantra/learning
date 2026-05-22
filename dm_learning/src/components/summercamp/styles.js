// Shared inline style constants for Summercamp components

export const container = { maxWidth: 1420, margin: '0 auto', padding: '0 28px' };

export const section = { padding: '100px 0', position: 'relative' };

export const sectionHead = { textAlign: 'center', marginBottom: 60 };

export const eyebrow = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em',
  textTransform: 'uppercase', color: '#6b6555', marginBottom: 18,
};

export const eyebrowCenter = { ...eyebrow, justifyContent: 'center' };

export const sectionTitle = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
  fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16,
};

export const sectionSub = {
  fontSize: '1.05rem', color: '#6b6555', maxWidth: 520, lineHeight: 1.7,
};

export const sectionSubCenter = { ...sectionSub, margin: '0 auto', textAlign: 'center' };

export const btnPrimary = {
  display: 'inline-flex', alignItems: 'center', gap: 9,
  background: '#111111', color: '#fff',
  fontFamily: "'Outfit', sans-serif", fontSize: '1rem', fontWeight: 700,
  padding: '16px 34px', borderRadius: 100, border: 'none', cursor: 'pointer',
  boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
};

export const btnOutline = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  border: '2px solid #111111', color: '#111111',
  fontSize: '0.95rem', fontWeight: 700, padding: '14px 28px', borderRadius: 100,
};
