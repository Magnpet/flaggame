// ═══════════════════════════════════════════════════════════
// FLAG GAME — Vanilla JS
// Phase 1: layout, themes, responsive scaling, dropdowns
// ═══════════════════════════════════════════════════════════

// ── Settings ─────────────────────────────────────────────
const DEFAULT_SETTINGS = {
  theme: 'dark',
  lang: 'en',
  flagSize: 270,
  cardWatermark: true,
  showHighScore: true,
};

let settings = DEFAULT_SETTINGS;
try {
  const saved = JSON.parse(localStorage.getItem('fg_settings') || '{}');
  settings = { ...DEFAULT_SETTINGS, ...saved };
} catch (_) {}

// ── Scale & flag frame ────────────────────────────────────
function getUiScale() {
  return Math.max(1, Math.min(1.85, window.innerWidth / 1380));
}

function updateLayout() {
  const scale  = getUiScale();
  const fw     = Math.round(settings.flagSize * scale);
  const fh     = Math.round(fw * 0.72);
  const root   = document.documentElement;
  root.style.setProperty('--ui-scale',      scale);
  root.style.setProperty('--flag-frame-w',  fw + 'px');
  root.style.setProperty('--flag-frame-h',  fh + 'px');
}

// ── Theme ─────────────────────────────────────────────────
function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
}

// ── Settings panel state ──────────────────────────────────
function applySettings() {
  applyTheme(settings.theme);

  // Flag size label + slider
  const sizeRange = document.getElementById('flag-size-range');
  const sizeLbl   = document.getElementById('flag-size-lbl');
  if (sizeRange) sizeRange.value = settings.flagSize;
  if (sizeLbl)   sizeLbl.textContent = settings.flagSize;

  // Mark active setting-option buttons
  document.querySelectorAll('.sg-opt').forEach(btn => {
    const key = btn.dataset.key;
    const val = btn.dataset.val;
    if (!key) return;
    const current = String(settings[key]);
    btn.classList.toggle('active', current === val);
  });

  // Best score widget visibility (classic mode only, controlled in Phase 4)
  const bestEl = document.getElementById('best-score');
  if (bestEl) {
    const hs = parseFloat(localStorage.getItem('fg_r_hs') || '0');
    const show = settings.showHighScore && hs > 0;
    bestEl.classList.toggle('hidden', !show);
    if (show) document.getElementById('best-score-val').textContent = hs.toFixed(1);
  }

  updateLayout();
}

function saveSetting(key, val) {
  settings[key] = val;
  localStorage.setItem('fg_settings', JSON.stringify(settings));
  applySettings();
}

// ── Dropdown helpers ──────────────────────────────────────
function closeAllDropdowns() {
  document.querySelectorAll('.hdr-dd').forEach(d => d.classList.remove('open'));
  document.querySelectorAll('.chevron').forEach(c => c.classList.remove('flipped'));
  document.querySelectorAll('.hdr-btn').forEach(b => b.classList.remove('active-btn'));
}

function toggleDropdown(ddId, chevronId, btnId) {
  const dd  = document.getElementById(ddId);
  const ch  = document.getElementById(chevronId);
  const btn = document.getElementById(btnId);
  const wasOpen = dd.classList.contains('open');
  closeAllDropdowns();
  if (!wasOpen) {
    dd.classList.add('open');
    if (ch)  ch.classList.add('flipped');
    if (btn) btn.classList.add('active-btn');
  }
}

// ── Game mode switching ───────────────────────────────────
let currentMode = 'classic';

const MODE_LABELS = {
  classic: 'Flag Game',
  duel:    'Flag Duel',
  reveal:  'Flag Reveal',
  puzzle:  'Flag Puzzle',
};

function switchMode(mode) {
  currentMode = mode;
  closeAllDropdowns();

  // Show/hide containers
  document.getElementById('classic-game').classList.toggle('active', mode === 'classic');
  document.getElementById('duel-game').classList.toggle('active', mode === 'duel');
  const soonEl = document.getElementById('coming-soon');
  const isSoon = mode === 'reveal' || mode === 'puzzle';
  soonEl.classList.toggle('active', isSoon);
  if (isSoon) {
    document.getElementById('coming-soon-sub').textContent =
      MODE_LABELS[mode] + ' will follow the same design language';
  }

  // Update progress widget — only shown in classic
  document.getElementById('progress-widget').classList.toggle('hidden', mode !== 'classic');

  // Update mode button label
  document.getElementById('mode-label').textContent = MODE_LABELS[mode] || mode;

  // Update active item in dropdown
  document.querySelectorAll('.mode-item').forEach(item => {
    item.classList.toggle('active', item.dataset.mode === mode);
  });
}

// ── DOMContentLoaded init ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Apply saved settings immediately
  applySettings();

  // Resize listener
  window.addEventListener('resize', updateLayout);

  // ── Milestones button ──
  document.getElementById('milestones-btn').addEventListener('click', () => {
    closeAllDropdowns();
    const hs    = parseFloat(localStorage.getItem('fg_r_hs')    || '0');
    const duelH = parseInt(localStorage.getItem('fg_duel_hs')   || '0', 10);
    const msC   = document.getElementById('ms-classic');
    const msD   = document.getElementById('ms-duel');
    msC.textContent = hs    > 0 ? hs.toFixed(1) : '—';
    msD.textContent = duelH > 0 ? duelH          : '—';
    msC.classList.toggle('none', hs    === 0);
    msD.classList.toggle('none', duelH === 0);
    document.getElementById('milestones-overlay').classList.remove('hidden');
  });
  document.getElementById('milestones-close').addEventListener('click', () => {
    document.getElementById('milestones-overlay').classList.add('hidden');
  });
  document.getElementById('milestones-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget)
      document.getElementById('milestones-overlay').classList.add('hidden');
  });

  // ── Mode dropdown ──
  document.getElementById('mode-btn').addEventListener('click', e => {
    e.stopPropagation();
    toggleDropdown('mode-menu', 'mode-chevron', 'mode-btn');
  });
  document.querySelectorAll('.mode-item').forEach(item => {
    item.addEventListener('click', () => switchMode(item.dataset.mode));
  });

  // ── Settings dropdown ──
  document.getElementById('settings-btn').addEventListener('click', e => {
    e.stopPropagation();
    toggleDropdown('settings-panel', null, 'settings-btn');
  });

  // Setting option buttons (theme, lang, watermark, showHighScore)
  document.querySelectorAll('.sg-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.key;
      let   val = btn.dataset.val;
      // Coerce booleans stored as strings
      if (val === 'true')  val = true;
      if (val === 'false') val = false;
      saveSetting(key, val);
    });
  });

  // Flag size slider
  document.getElementById('flag-size-range').addEventListener('input', e => {
    saveSetting('flagSize', parseInt(e.target.value, 10));
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', closeAllDropdowns);

  // Prevent clicks inside dropdowns from closing them
  document.querySelectorAll('.hdr-dd').forEach(dd => {
    dd.addEventListener('click', e => e.stopPropagation());
  });
});
