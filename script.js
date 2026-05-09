// ═══════════════════════════════════════════════════════════
// FLAG GAME — Vanilla JS
// Phase 1: layout, themes, responsive scaling, dropdowns
// Phase 2: Classic game — roll, placement, scoring, overlay
// ═══════════════════════════════════════════════════════════

// ═══ COUNTRY DATA ════════════════════════════════════════
const COUNTRY_PAIRS = [
  ['Andorra','ad'],['United Arab Emirates','ae'],['Afghanistan','af'],
  ['Antigua and Barbuda','ag'],['Albania','al'],['Armenia','am'],
  ['Angola','ao'],['Argentina','ar'],['Austria','at'],['Australia','au'],
  ['Azerbaijan','az'],['Bosnia and Herzegovina','ba'],['Barbados','bb'],
  ['Bangladesh','bd'],['Belgium','be'],['Burkina Faso','bf'],['Bulgaria','bg'],
  ['Bahrain','bh'],['Burundi','bi'],['Benin','bj'],['Bolivia','bo'],
  ['Brazil','br'],['Bahamas','bs'],['Bhutan','bt'],['Botswana','bw'],
  ['Belarus','by'],['Belize','bz'],['Canada','ca'],
  ['Democratic Republic of the Congo','cd'],['Central African Republic','cf'],
  ['Republic of the Congo','cg'],['Switzerland','ch'],['Ivory Coast','ci'],
  ['Chile','cl'],['Cameroon','cm'],['China','cn'],['Colombia','co'],
  ['Costa Rica','cr'],['Cuba','cu'],['Cyprus','cy'],['Czech Republic','cz'],
  ['Germany','de'],['Djibouti','dj'],['Denmark','dk'],['Dominica','dm'],
  ['Dominican Republic','do'],['Algeria','dz'],['Ecuador','ec'],
  ['Estonia','ee'],['Egypt','eg'],['Eritrea','er'],['Spain','es'],
  ['Ethiopia','et'],['Finland','fi'],['Fiji','fj'],['France','fr'],
  ['Gabon','ga'],['United Kingdom','gb'],['Grenada','gd'],['Georgia','ge'],
  ['Ghana','gh'],['Gambia','gm'],['Guinea','gn'],['Equatorial Guinea','gq'],
  ['Greece','gr'],['Guatemala','gt'],['Guinea-Bissau','gw'],['Guyana','gy'],
  ['Honduras','hn'],['Croatia','hr'],['Haiti','ht'],['Hungary','hu'],
  ['Indonesia','id'],['Ireland','ie'],['Israel','il'],['India','in'],
  ['Iraq','iq'],['Iran','ir'],['Iceland','is'],['Italy','it'],
  ['Jamaica','jm'],['Jordan','jo'],['Japan','jp'],['Kenya','ke'],
  ['Kyrgyzstan','kg'],['Cambodia','kh'],['Kiribati','ki'],['Comoros','km'],
  ['Saint Kitts and Nevis','kn'],['North Korea','kp'],['South Korea','kr'],
  ['Kuwait','kw'],['Kazakhstan','kz'],['Laos','la'],['Lebanon','lb'],
  ['Saint Lucia','lc'],['Liechtenstein','li'],['Sri Lanka','lk'],
  ['Liberia','lr'],['Lesotho','ls'],['Lithuania','lt'],['Luxembourg','lu'],
  ['Latvia','lv'],['Libya','ly'],['Morocco','ma'],['Monaco','mc'],
  ['Moldova','md'],['Montenegro','me'],['Madagascar','mg'],
  ['Marshall Islands','mh'],['North Macedonia','mk'],['Mali','ml'],
  ['Myanmar','mm'],['Mongolia','mn'],['Mauritania','mr'],['Malta','mt'],
  ['Mauritius','mu'],['Maldives','mv'],['Malawi','mw'],['Mexico','mx'],
  ['Malaysia','my'],['Mozambique','mz'],['Namibia','na'],['Niger','ne'],
  ['Nigeria','ng'],['Nicaragua','ni'],['Netherlands','nl'],['Norway','no'],
  ['Nepal','np'],['Nauru','nr'],['New Zealand','nz'],['Oman','om'],
  ['Palau','pw'],['Panama','pa'],['Peru','pe'],['Papua New Guinea','pg'],
  ['Philippines','ph'],['Pakistan','pk'],['Poland','pl'],['Portugal','pt'],
  ['Paraguay','py'],['Qatar','qa'],['Romania','ro'],['Serbia','rs'],
  ['Russia','ru'],['Rwanda','rw'],['Saudi Arabia','sa'],
  ['Solomon Islands','sb'],['Seychelles','sc'],['Sudan','sd'],['Sweden','se'],
  ['Singapore','sg'],['Slovenia','si'],['Slovakia','sk'],['Sierra Leone','sl'],
  ['San Marino','sm'],['Senegal','sn'],['Somalia','so'],['Suriname','sr'],
  ['South Sudan','ss'],['Sao Tome and Principe','st'],['El Salvador','sv'],
  ['Syria','sy'],['Eswatini','sz'],['Chad','td'],['Togo','tg'],
  ['Thailand','th'],['Tajikistan','tj'],['Timor-Leste','tl'],
  ['Turkmenistan','tm'],['Tunisia','tn'],['Tonga','to'],['Turkey','tr'],
  ['Trinidad and Tobago','tt'],['Tuvalu','tv'],['Tanzania','tz'],
  ['Ukraine','ua'],['Uganda','ug'],['United States','us'],['Uruguay','uy'],
  ['Uzbekistan','uz'],['Saint Vincent and the Grenadines','vc'],
  ['Venezuela','ve'],['Vietnam','vn'],['Vanuatu','vu'],['Samoa','ws'],
  ['Kosovo','xk'],['Yemen','ye'],['South Africa','za'],['Zambia','zm'],
  ['Zimbabwe','zw'],
];
const COUNTRIES = COUNTRY_PAIRS.map(([name, code]) => ({
  name, code, flagUrl: `flags_images/${code}.png`,
}));

// Preload all flag images on page load so rolls are instant
const _preloadedFlags = COUNTRIES.map(c => { const img = new Image(); img.src = c.flagUrl; return img; });

// ═══ CATEGORY DEFINITIONS ════════════════════════════════
const CATEGORY_PAIRS = [
  { key:'hdi',  dataType:'hdi',
    variants:[{id:'hdiHigh', higher:true},{id:'hdiLow', higher:false}] },
  { key:'olym', dataType:'olympic',
    variants:[{id:'olymMost', higher:true},{id:'olymLeast', higher:false}] },
  { key:'pop',  dataType:'population',
    variants:[{id:'popHigh', higher:true},{id:'popLow', higher:false}] },
  { key:'elev', dataType:'highest-elevation',
    variants:[{id:'elevHigh', higher:true},{id:'elevLow', higher:false}] },
  { key:'life', dataType:'life-expectancy',
    variants:[{id:'lifeHigh', higher:true},{id:'lifeLow', higher:false}] },
  { key:'area', dataType:'land-area',
    variants:[{id:'areaLarge', higher:true},{id:'areaSmall', higher:false}] },
  { key:'temp', dataType:'average-temperature',
    variants:[{id:'tempHot', higher:true},{id:'tempCold', higher:false}] },
  { key:'gdp',  dataType:'gdp-per-capita',
    variants:[{id:'gdpHigh', higher:true},{id:'gdpLow', higher:false}] },
];
const CATEGORY_FALLBACKS = {
  'olympic': 134, 'population': 195, 'hdi': 195,
  'highest-elevation': 195, 'life-expectancy': 195,
  'land-area': 195, 'average-temperature': 195, 'gdp-per-capita': 195,
};
// Max rank present in each data file — used for correct "Least" inversion
const CATEGORY_TOTALS = {
  'olympic': 133, 'population': 196, 'hdi': 191,
  'highest-elevation': 193, 'life-expectancy': 192,
  'land-area': 196, 'average-temperature': 194, 'gdp-per-capita': 194,
};

// Duel mode uses 7 categories; "higher ranking" always means lower rank number
const DUEL_CATS = [
  { key: 'duelPop',  dataType: 'population'          },
  { key: 'duelGdp',  dataType: 'gdp-per-capita'       },
  { key: 'duelArea', dataType: 'land-area'             },
  { key: 'duelLife', dataType: 'life-expectancy'       },
  { key: 'duelHdi',  dataType: 'hdi'                  },
  { key: 'duelOlym', dataType: 'olympic'              },
  { key: 'duelTemp', dataType: 'average-temperature'  },
];

// ═══ I18N ════════════════════════════════════════════════
const STRINGS = {
  en: {
    hdiHigh:'Highest HDI', hdiLow:'Lowest HDI',
    olymMost:'Most Olympic Medals', olymLeast:'Fewest Olympic Medals',
    popHigh:'Largest Population', popLow:'Smallest Population',
    elevHigh:'Highest Elevation', elevLow:'Lowest Elevation',
    lifeHigh:'Highest Life Expectancy', lifeLow:'Lowest Life Expectancy',
    areaLarge:'Largest Land Area', areaSmall:'Smallest Land Area',
    tempHot:'Hottest Country', tempCold:'Coldest Country',
    gdpHigh:'Highest GDP/Capita', gdpLow:'Lowest GDP/Capita',
    duelPop:'Population', duelGdp:'GDP/Capita', duelArea:'Land Area',
    duelLife:'Life Expectancy', duelHdi:'HDI', duelOlym:'Olympic Medals', duelTemp:'Avg Temperature',
    milestones:'Milestones', settings:'Settings',
    themeLabel:'Theme', lightTheme:'Light', darkTheme:'Dark', langLabel:'Language',
    cardWatermarkLabel:'Card Watermark', showBestLabel:'Show Best Score',
    soundLabel:'Sound', soundOn:'On', soundOff:'Off',
    flagSizeLabel:'Flag Size', rollToStart:'Roll to Start',
    livesLabel:'Lives', skipsLabel:'Skips',
    possiblePts:'Possible pts:', totalScore:'Score:',
    submitBtn:'Submit', skipBtn:'Skip',
    flagOf:'Flag {0} of 15', finalScore:'Final Score',
    newHighScore:'🏆 New High Score!', gameOver:'Game Over',
    flagRevealHs:'Flag Reveal Best', flagPuzzleHs:'Flag Puzzle Best',
    pickCategory:'← Pick a Category →', placeHere:'Place here →',
    empty:'Empty', pressRoll:'Press Roll to begin',
    gameComplete:'Game Complete', newPersonalBest:'🏆 New Personal Best',
    avgRankingNote:'Average ranking — lower is better',
    personalBest:'Personal best:', playAgain:'Play Again',
    share:'Share', copied:'✓ Copied!',
    unranked:'Unranked', yourBestScores:'Your Best Scores',
    flagGame:'Flag Game', flagDuel:'Flag Duel',
    flagReveal:'Flag Reveal', flagPuzzle:'Flag Puzzle',
    close:'Close', english:'English', norwegian:'Norwegian (Bokmål)',
    rerolls:'re-rolls', placed:'Placed',
    whichHigher:'Which country ranks higher in…',
    clickToAnswer:'Click a flag to answer',
    correct:'✓ Correct!', wrong:'✕ Wrong!', tie:'— Tie!',
    tieExplain:'Both countries share the same rank — streak preserved',
    nextDuel:'Next Duel →', comingSoon:'Coming Soon',
  },
  no: {
    hdiHigh:'Høyest HDI', hdiLow:'Lavest HDI',
    olymMost:'Flest olympiske medaljer', olymLeast:'Færrest olympiske medaljer',
    popHigh:'Størst befolkning', popLow:'Minst befolkning',
    elevHigh:'Høyest beliggenhet', elevLow:'Lavest beliggenhet',
    lifeHigh:'Høyest levealder', lifeLow:'Lavest levealder',
    areaLarge:'Størst landareal', areaSmall:'Minst landareal',
    tempHot:'Varmest land', tempCold:'Kaldest land',
    gdpHigh:'Høyest BNP/innb.', gdpLow:'Lavest BNP/innb.',
    duelPop:'Befolkning', duelGdp:'BNP/innb.', duelArea:'Landareal',
    duelLife:'Levealder', duelHdi:'HDI', duelOlym:'Olympiske medaljer', duelTemp:'Gjennomsnittstemperatur',
    milestones:'Milepæler', settings:'Innstillinger',
    themeLabel:'Tema', lightTheme:'Lys', darkTheme:'Mørk', langLabel:'Språk',
    cardWatermarkLabel:'Kortvannmerke', showBestLabel:'Vis beste score',
    soundLabel:'Lyd', soundOn:'På', soundOff:'Av',
    flagSizeLabel:'Flaggstørrelse', rollToStart:'Rull for å starte',
    livesLabel:'Liv', skipsLabel:'Hopp',
    possiblePts:'Mulige poeng:', totalScore:'Poeng:',
    submitBtn:'Send', skipBtn:'Skip',
    flagOf:'Flagg {0} av 15', finalScore:'Sluttresultat',
    newHighScore:'🏆 Ny rekord!', gameOver:'Spill over',
    flagRevealHs:'Flaggavsløring rekord', flagPuzzleHs:'Flaggpuslespill rekord',
    pickCategory:'← Velg en kategori →', placeHere:'Plasser her →',
    empty:'Tom', pressRoll:'Trykk Roll for å starte',
    gameComplete:'Spill fullført', newPersonalBest:'🏆 Ny personlig rekord',
    avgRankingNote:'Gjennomsnittlig rangering — lavere er bedre',
    personalBest:'Personlig rekord:', playAgain:'Spill igjen',
    share:'Del', copied:'✓ Kopiert!',
    unranked:'Urangert', yourBestScores:'Dine beste resultater',
    flagGame:'Flag Game', flagDuel:'Flaggduell',
    flagReveal:'Flaggavsløring', flagPuzzle:'Flaggpuslespill',
    close:'Lukk', english:'English', norwegian:'Norsk (Bokmål)',
    rerolls:'reruller', placed:'Plassert',
    whichHigher:'Hvilket land rangeres høyere i…',
    clickToAnswer:'Klikk på et flagg for å svare',
    correct:'✓ Riktig!', wrong:'✕ Feil!', tie:'— Uavgjort!',
    tieExplain:'Begge land deler samme rangering — streak beholdes',
    nextDuel:'Neste duell →', comingSoon:'Kommer snart',
  },
};

function t(key) {
  const s = STRINGS[settings.lang] || STRINGS.en;
  return s[key] ?? STRINGS.en[key] ?? key;
}

let countryNamesMap = {};
async function loadCountryNames(lang) {
  if (lang === 'en') { countryNamesMap = {}; return; }
  try {
    const r = await fetch(`data/country_names_${lang}.json`);
    if (!r.ok) return;
    const data = await r.json();
    countryNamesMap = Object.fromEntries(
      Object.entries(data).filter(([k]) => !k.startsWith('_'))
    );
  } catch (_) { countryNamesMap = {}; }
}
function cn(name) { return countryNamesMap[name] || name; }

// ═══ SCORE UTILITIES ═════════════════════════════════════
function parseRank(str) {
  if (!str) return 999;
  return parseInt(str, 10) || 999;
}
function getRankData(rnk, dataType) {
  const key = dataType.replace(/-([a-z])/g, (_, l) => l.toUpperCase()) + 'Rankings';
  return rnk[key] || {};
}
function getScore(name, rd, higher, dataType) {
  const raw = rd[name];
  if (!raw) {
    // Missing from data: "Most" uses fallback rank; "Least" gets rank 1 (fewest = best)
    return higher ? (CATEGORY_FALLBACKS[dataType] || 195) : 1;
  }
  const rank  = parseRank(raw);
  const total = CATEGORY_TOTALS[dataType] || 195;
  return higher ? rank : (total + 1 - rank);
}
function ordinalStr(n, fallback) {
  if (!n || n === 999) return fallback || t('unranked');
  const s = ['th','st','nd','rd'], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
function rankColor(score) {
  if (!score || score === 999) return 'var(--c-sub)';
  if (score <= 35)  return 'var(--c-rank-good)';
  if (score <= 110) return 'var(--c-rank-mid)';
  return 'var(--c-rank-bad)';
}

// ═══ GAME STATE ══════════════════════════════════════════
let rankings     = {};
let categories   = [];      // 8 selected category variants
let slots        = Array(8).fill(null);   // placed countries
let scores       = Array(8).fill(999);   // calculated ranks
let currentCountry = null;
let phase        = 'idle';  // 'idle' | 'rolling' | 'placing' | 'complete'
let isRolling    = false;
let skipsLeft    = 3;
let rolledSet    = new Set();
let filledCount  = 0;
let highScore    = 0;
let isNewHigh    = false;
let rollTimer    = null;

// ── Duel state ─────────────────────────────────────────
let duelCatIdx     = 0;
let duelPair       = [];         // [country, country]
let duelStreak     = 0;
let duelBestStreak = 0;
let duelAnswered   = false;
let duelCorrectIdx = -1;         // -1 = tie
let duelResult     = null;       // 'correct' | 'wrong' | 'tie' | null
let duelIsNewBest  = false;
let dataReady      = false;      // true once rankings + initGame have run

// ═══ GAME FUNCTIONS ══════════════════════════════════════

function initGame() {
  clearTimeout(rollTimer);

  // Pick 8 random category variants (one per pair)
  categories = CATEGORY_PAIRS.map(pair => {
    const v = pair.variants[Math.floor(Math.random() * 2)];
    return { ...v, dataType: pair.dataType };
  });

  // Reset state
  slots        = Array(8).fill(null);
  scores       = Array(8).fill(999);
  currentCountry = null;
  phase        = 'idle';
  isRolling    = false;
  skipsLeft    = 3;
  rolledSet    = new Set();
  filledCount  = 0;
  isNewHigh    = false;
  highScore    = parseFloat(localStorage.getItem('fg_r_hs') || '0');

  // Reset card UI — stagger entrance animation per column position (0→3)
  for (let i = 0; i < 8; i++) resetCard(i, (i % 4) * 40);

  // Set category labels
  for (let i = 0; i < 8; i++) {
    document.getElementById(`cat-lbl-${i}`).textContent = t(categories[i].id);
  }

  // Reset flag center
  setFlagFrameEmpty();

  // Hide pick prompt
  document.getElementById('pick-prompt').classList.add('hidden');

  // Reset progress + button + dots
  updateProgressDots(0);
  updateProgressLabel(0);
  updateSkipDots();
  updateRollButton();

  // Hide score overlay
  document.getElementById('score-overlay').classList.add('hidden');

  // Refresh best score in header
  applySettings();
}

function setFlagFrameEmpty() {
  const flagDisplay = document.getElementById('flag-display');
  flagDisplay.classList.remove('visible', 'flag-deal-anim');
  flagDisplay.style.backgroundImage = '';

  document.getElementById('globe-back').style.display     = '';
  document.getElementById('press-roll-hint').style.display = '';
  document.getElementById('roll-country-name').textContent = t('rollToStart');
}

function startRoll() {
  if (isRolling || categories.length === 0) return;
  clearTimeout(rollTimer);

  // Use a skip if re-rolling
  if (phase === 'placing') {
    skipsLeft = Math.max(0, skipsLeft - 1);
    updateSkipDots();
  }

  isRolling      = true;
  currentCountry = null;
  phase          = 'rolling';

  // UI: hide globe, show flag display, clear country name
  document.getElementById('globe-back').style.display      = 'none';
  document.getElementById('press-roll-hint').style.display = 'none';
  document.getElementById('roll-country-name').textContent = '';
  document.getElementById('pick-prompt').classList.add('hidden');

  const flagDisplay = document.getElementById('flag-display');
  flagDisplay.classList.add('visible');
  flagDisplay.classList.remove('flag-deal-anim');

  // Remove placeable state while rolling
  for (let i = 0; i < 8; i++) {
    document.getElementById(`cat-${i}`).classList.remove('placeable');
  }

  updateRollButton();

  // Slot-machine tick
  const available = COUNTRIES.map((_, i) => i).filter(i => !rolledSet.has(i));
  if (available.length === 0) {
    isRolling = false;
    phase     = 'idle';
    setFlagFrameEmpty();
    updateRollButton();
    return;
  }

  let elapsed  = 0;
  let lastTick = performance.now();
  let interval = 50;
  const total  = 2000;

  function tick() {
    const now   = performance.now();
    elapsed    += now - lastTick;
    lastTick    = now;

    if      (elapsed < 600)  interval = 50;
    else if (elapsed < 1100) interval = 90;
    else if (elapsed < 1500) interval = 160;
    else                     interval = 300;

    if (elapsed < total) {
      const ri = available[Math.floor(Math.random() * available.length)];
      flagDisplay.style.backgroundImage = `url(${COUNTRIES[ri].flagUrl})`;
      rollTimer = setTimeout(tick, interval);
    } else {
      // Settle on final country
      const fi = available[Math.floor(Math.random() * available.length)];
      const fc = COUNTRIES[fi];
      rolledSet.add(fi);
      currentCountry = fc;

      // Trigger deal animation (forced reflow to restart)
      flagDisplay.style.backgroundImage = `url(${fc.flagUrl})`;
      flagDisplay.classList.remove('flag-deal-anim');
      void flagDisplay.offsetWidth;
      flagDisplay.classList.add('flag-deal-anim');

      document.getElementById('roll-country-name').textContent = cn(fc.name);

      phase     = 'placing';
      isRolling = false;

      updateRollButton();
      updatePlaceableCards();
      document.getElementById('pick-prompt').classList.remove('hidden');
    }
  }

  rollTimer = setTimeout(tick, interval);
}

function placeFlag(slotIdx) {
  if (phase !== 'placing' || slots[slotIdx] || !currentCountry) return;

  // Pop animation on card
  const card = document.getElementById(`cat-${slotIdx}`);
  card.classList.add('cat-popping');
  setTimeout(() => card.classList.remove('cat-popping'), 380);

  // Calculate rank score
  const cat   = categories[slotIdx];
  const rd    = getRankData(rankings, cat.dataType);
  const score = getScore(currentCountry.name, rd, cat.higher, cat.dataType);

  // Commit to state
  slots[slotIdx]  = currentCountry;
  scores[slotIdx] = score;
  currentCountry  = null;
  filledCount++;

  // Update card UI
  updateCard(slotIdx);

  // Return to idle
  phase = 'idle';
  updatePlaceableCards();
  document.getElementById('pick-prompt').classList.add('hidden');

  // Clear flag center
  setFlagFrameEmpty();

  // Progress
  updateProgressDots(filledCount);
  updateProgressLabel(filledCount);
  updateRollButton();

  // Game over?
  if (filledCount === 8) {
    setTimeout(showScoreOverlay, 350);
  }
}

// ─── UI helpers ───────────────────────────────────────────

function updateRollButton() {
  const btn = document.getElementById('roll-btn');
  if (isRolling) {
    btn.textContent = 'Rolling…';
    btn.disabled    = true;
  } else if (phase === 'idle') {
    btn.textContent = 'Roll';
    btn.disabled    = false;
  } else if (phase === 'placing') {
    btn.textContent = 'Re-roll';
    btn.disabled    = skipsLeft <= 0;
  }
}

function updateSkipDots() {
  for (let i = 0; i < 3; i++) {
    document.getElementById(`skip-${i}`).classList.toggle('on', i < skipsLeft);
  }
}

function updateProgressDots(n) {
  for (let i = 0; i < 8; i++) {
    document.getElementById(`pd${i}`).classList.toggle('on', i < n);
  }
}

function updateProgressLabel(n) {
  document.getElementById('placed-lbl').textContent = `${t('placed')} ${n}/8`;
}

function updatePlaceableCards() {
  for (let i = 0; i < 8; i++) {
    const canPlace   = phase === 'placing' && !slots[i];
    const card       = document.getElementById(`cat-${i}`);
    const etxt       = document.getElementById(`cat-etxt-${i}`);
    card.classList.toggle('placeable', canPlace);
    if (etxt && !slots[i]) {
      etxt.textContent   = canPlace ? t('placeHere') : t('empty');
      etxt.style.fontStyle  = canPlace ? 'normal' : 'italic';
      etxt.style.fontWeight = canPlace ? '600' : '400';
    }
  }
}

function resetCard(i, animDelay = 0) {
  const card = document.getElementById(`cat-${i}`);
  card.classList.remove('filled', 'placeable', 'watermarked');

  document.getElementById(`cat-slot-${i}`).classList.remove('filled');
  document.getElementById(`cat-flag-${i}`).style.backgroundImage = '';
  document.getElementById(`cat-name-${i}`).textContent = '';
  document.getElementById(`cat-rank-${i}`).textContent = '';
  document.getElementById(`cat-wm-${i}`).style.backgroundImage = '';

  const etxt = document.getElementById(`cat-etxt-${i}`);
  etxt.textContent      = t('empty');
  etxt.style.fontStyle  = 'italic';
  etxt.style.fontWeight = '400';

  // Re-trigger entrance animation (forced reflow restarts it)
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = `fadeSlideUp 0.3s ${animDelay}ms ease backwards`;
}

function updateCard(i) {
  const country = slots[i];
  const score   = scores[i];
  if (!country) return;

  const card = document.getElementById(`cat-${i}`);
  card.classList.add('filled');
  card.classList.remove('placeable');

  // Flag slot
  const slot = document.getElementById(`cat-slot-${i}`);
  slot.classList.add('filled');
  document.getElementById(`cat-flag-${i}`).style.backgroundImage = `url(${country.flagUrl})`;

  // Country name + rank
  document.getElementById(`cat-name-${i}`).textContent = cn(country.name);
  const rankEl = document.getElementById(`cat-rank-${i}`);
  rankEl.textContent = ordinalStr(score);
  rankEl.style.color = rankColor(score);

  // Watermark
  updateCardWatermark(i);
}

function updateCardWatermark(i) {
  const card = document.getElementById(`cat-${i}`);
  const wm   = document.getElementById(`cat-wm-${i}`);
  if (slots[i] && settings.cardWatermark) {
    wm.style.backgroundImage = `url(${slots[i].flagUrl})`;
    card.classList.add('watermarked');
  } else {
    wm.style.backgroundImage = '';
    card.classList.remove('watermarked');
  }
}

// ─── Score overlay ────────────────────────────────────────

function showScoreOverlay() {
  phase = 'complete';

  const valid = scores.filter(s => s !== 999 && s !== null);
  const avg   = valid.length ? valid.reduce((a, b) => a + b, 0) / valid.length : 0;

  // High score (lower is better)
  isNewHigh = false;
  if (!highScore || avg < highScore) {
    highScore = avg;
    localStorage.setItem('fg_r_hs', avg.toString());
    isNewHigh = true;
    applySettings(); // refresh header best-score widget
  }

  // Badge
  document.getElementById('score-badge').textContent =
    isNewHigh ? t('newPersonalBest') : t('gameComplete');

  // Best score row
  const bestRow = document.getElementById('score-best-row');
  const bestVal = document.getElementById('score-best-val');
  if (highScore > 0 && !isNewHigh) {
    bestRow.classList.remove('hidden');
    bestVal.textContent = highScore.toFixed(1);
  } else {
    bestRow.classList.add('hidden');
  }

  // Build results grid
  const grid = document.getElementById('score-grid');
  grid.innerHTML = '';
  categories.forEach((cat, i) => {
    const row = document.createElement('div');
    row.className = 'score-row';
    row.style.animationDelay = `${0.04 * i}s`;

    if (slots[i]) {
      const flagDiv = document.createElement('div');
      flagDiv.className = 'score-row-flag';
      flagDiv.style.backgroundImage = `url(${slots[i].flagUrl})`;
      row.appendChild(flagDiv);
    }

    const info    = document.createElement('div');
    info.className = 'score-row-info';

    const catEl = document.createElement('div');
    catEl.className   = 'score-row-cat';
    catEl.textContent = t(cat.id);

    const rankEl = document.createElement('div');
    rankEl.className   = 'score-row-rank';
    rankEl.textContent = ordinalStr(scores[i]);
    rankEl.style.color = rankColor(scores[i]);

    info.appendChild(catEl);
    info.appendChild(rankEl);
    row.appendChild(info);
    grid.appendChild(row);
  });

  // Show overlay
  document.getElementById('score-overlay').classList.remove('hidden');

  // Count-up animation on the big score number
  const bigEl = document.getElementById('score-big');
  bigEl.textContent = '0.0';
  let start = null;
  const dur = 2000;
  function step(ts) {
    if (!start) start = ts;
    const p    = Math.min((ts - start) / dur, 1);
    const ease = p < 0.5 ? 4*p*p*p : 1 - Math.pow(-2*p + 2, 3) / 2;
    bigEl.textContent = (avg * ease).toFixed(1);
    if (p < 1) requestAnimationFrame(step);
  }
  setTimeout(() => requestAnimationFrame(step), 200);

  // Share button label
  document.getElementById('share-btn').textContent = t('share');
}

async function handleShare() {
  const valid = scores.filter(s => s !== 999);
  const avg   = valid.reduce((a, b) => a + b, 0) / valid.length;
  const lines = [
    `🌍 Flag Game — Average Rank: ${avg.toFixed(1)}`,
    '',
    ...categories.map((c, i) => `${t(c.id)}: ${ordinalStr(scores[i])}`),
  ].join('\n');

  const shareBtn = document.getElementById('share-btn');
  try {
    if (navigator.share) {
      await navigator.share({ text: lines });
    } else {
      await navigator.clipboard.writeText(lines);
      shareBtn.textContent = t('copied');
      setTimeout(() => { shareBtn.textContent = t('share'); }, 2000);
    }
  } catch (_) {}
}

// ═══ DUEL GAME ═══════════════════════════════════════════

function initDuel() {
  duelStreak     = 0;
  duelBestStreak = parseInt(localStorage.getItem('fg_duel_hs') || '0', 10);
  duelIsNewBest  = false;
  updateDuelStreaks();
  setupNewDuel();
}

function setupNewDuel() {
  duelCatIdx     = Math.floor(Math.random() * DUEL_CATS.length);
  duelAnswered   = false;
  duelCorrectIdx = -1;
  duelResult     = null;
  duelIsNewBest  = false;

  // Two different random countries
  const a = Math.floor(Math.random() * COUNTRIES.length);
  let b;
  do { b = Math.floor(Math.random() * COUNTRIES.length); } while (b === a);
  duelPair = [COUNTRIES[a], COUNTRIES[b]];

  // Category label
  document.getElementById('duel-cat-name').textContent = t(DUEL_CATS[duelCatIdx].key);

  // Flags, names, reset card states
  [0, 1].forEach(idx => {
    const card = document.getElementById(`duel-card-${idx}`);
    card.classList.remove('answered', 'result-correct', 'result-wrong', 'result-tie',
                          'duel-correct', 'duel-wrong');

    document.getElementById(`duel-flag-${idx}`).style.backgroundImage =
      `url(${duelPair[idx].flagUrl})`;

    const nameEl = document.getElementById(`duel-country-${idx}`);
    nameEl.textContent = cn(duelPair[idx].name);
    nameEl.style.color = '';

    const rankEl = document.getElementById(`duel-rank-${idx}`);
    rankEl.textContent = '';
    rankEl.style.color = '';
    rankEl.classList.add('hidden');
  });

  // Footer: hint visible, result + next hidden
  document.getElementById('duel-click-hint').classList.remove('hidden');
  const resultEl = document.getElementById('duel-result');
  resultEl.textContent = '';
  resultEl.className = 'duel-result hidden';
  document.getElementById('duel-tie-note').classList.add('hidden');
  document.getElementById('duel-next-btn').classList.add('hidden');
}

function handleDuelPick(idx) {
  if (duelAnswered) return;

  const cat = DUEL_CATS[duelCatIdx];
  const rd  = getRankData(rankings, cat.dataType);
  const r0  = parseRank(rd[duelPair[0].name] || '999');
  const r1  = parseRank(rd[duelPair[1].name] || '999');

  duelAnswered = true;

  if (r0 === r1) {
    // Tie — streak preserved, neither card is "correct"
    duelResult     = 'tie';
    duelCorrectIdx = -1;
  } else {
    duelCorrectIdx = r0 < r1 ? 0 : 1; // lower rank number = higher ranking
    if (idx === duelCorrectIdx) {
      duelStreak++;
      duelResult = 'correct';
      if (duelStreak > duelBestStreak) {
        duelBestStreak = duelStreak;
        localStorage.setItem('fg_duel_hs', duelBestStreak);
        duelIsNewBest = true;
        setTimeout(duelTriggerFire, 100);
      }
    } else {
      duelStreak    = 0;
      duelResult    = 'wrong';
      duelIsNewBest = false;
      document.getElementById('duel-streak').classList.remove('streak-fire', 'streak-glow');
    }
  }

  showDuelResult();
  updateDuelStreaks();
}

function showDuelResult() {
  const cat = DUEL_CATS[duelCatIdx];
  const rd  = getRankData(rankings, cat.dataType);

  [0, 1].forEach(idx => {
    const raw    = rd[duelPair[idx].name];
    const r      = parseRank(raw || '999');
    const card   = document.getElementById(`duel-card-${idx}`);
    const nameEl = document.getElementById(`duel-country-${idx}`);
    const rankEl = document.getElementById(`duel-rank-${idx}`);

    rankEl.textContent = ordinalStr(r);
    rankEl.classList.remove('hidden');
    card.classList.add('answered');

    let col;
    if (duelResult === 'tie') {
      col = '#d97706';
      card.classList.add('result-tie');
    } else if (duelCorrectIdx === idx) {
      col = 'var(--c-rank-good)';
      card.classList.add('result-correct', 'duel-correct');
    } else {
      col = 'var(--c-rank-bad)';
      card.classList.add('result-wrong', 'duel-wrong');
    }
    nameEl.style.color = col;
    rankEl.style.color = col;
  });

  // Result badge
  const resultEl = document.getElementById('duel-result');
  resultEl.className  = `duel-result ${duelResult}`;
  resultEl.textContent =
    duelResult === 'correct' ? t('correct') :
    duelResult === 'wrong'   ? t('wrong')   : t('tie');

  // Tie note
  document.getElementById('duel-tie-note').classList.toggle('hidden', duelResult !== 'tie');

  // Swap click-hint → next button
  document.getElementById('duel-click-hint').classList.add('hidden');
  document.getElementById('duel-next-btn').classList.remove('hidden');
}

function updateDuelStreaks() {
  const el       = document.getElementById('duel-streak');
  el.textContent = duelStreak;
  el.style.color = duelIsNewBest ? '#fb923c' : 'var(--c-accent)';
  document.getElementById('duel-best-streak').textContent = duelBestStreak;
}

function duelTriggerFire() {
  const el = document.getElementById('duel-streak');
  el.classList.remove('streak-fire', 'streak-glow');
  void el.offsetWidth; // forced reflow — restart animation from frame 0
  el.classList.add('streak-fire');
  setTimeout(() => {
    el.classList.remove('streak-fire');
    el.classList.add('streak-glow');
  }, 1400); // fireFlare: 0.22s × 6 = 1.32s; settle after last frame
}

// ─── Apply i18n across the whole UI ──────────────────────
function applyI18n() {
  // Batch update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  // Category labels (requires categories to be set)
  if (categories.length === 8) {
    for (let i = 0; i < 8; i++) {
      document.getElementById(`cat-lbl-${i}`).textContent = t(categories[i].id);
    }
  }

  // Placed country names
  for (let i = 0; i < 8; i++) {
    if (slots[i]) {
      document.getElementById(`cat-name-${i}`).textContent = cn(slots[i].name);
    }
  }

  // Current country name in flag center
  if (currentCountry) {
    document.getElementById('roll-country-name').textContent = cn(currentCountry.name);
  } else if (!isRolling && phase === 'idle') {
    document.getElementById('roll-country-name').textContent = t('rollToStart');
  }

  // Empty-slot text on placeable cards
  updatePlaceableCards();

  // Progress label
  updateProgressLabel(filledCount);

  // Mode button label (header)
  const modeMap = {
    classic: t('flagGame'), duel: t('flagDuel'),
    reveal: t('flagReveal'), puzzle: t('flagPuzzle'),
  };
  document.getElementById('mode-label').textContent = modeMap[currentMode] || currentMode;

  // Score badge: managed dynamically — re-translate if overlay is visible
  if (phase === 'complete') {
    document.getElementById('score-badge').textContent =
      isNewHigh ? t('newPersonalBest') : t('gameComplete');
  }

  // Duel: re-translate country names, category, and result text
  if (duelPair.length === 2) {
    [0, 1].forEach(idx => {
      document.getElementById(`duel-country-${idx}`).textContent = cn(duelPair[idx].name);
    });
    if (DUEL_CATS[duelCatIdx]) {
      document.getElementById('duel-cat-name').textContent = t(DUEL_CATS[duelCatIdx].key);
    }
  }
  if (duelResult) {
    const resultEl = document.getElementById('duel-result');
    if (!resultEl.classList.contains('hidden')) {
      resultEl.textContent =
        duelResult === 'correct' ? t('correct') :
        duelResult === 'wrong'   ? t('wrong')   : t('tie');
    }
  }

  // Roll button stays in English (same as React version)
  updateRollButton();
}

// ═══ PHASE 1: SETTINGS / LAYOUT / THEME ══════════════════

const DEFAULT_SETTINGS = {
  theme: 'dark', lang: 'en', flagSize: 270,
  cardWatermark: true, showHighScore: true, sound: true,
};

let settings = DEFAULT_SETTINGS;
try {
  const saved = JSON.parse(localStorage.getItem('fg_settings') || '{}');
  settings = { ...DEFAULT_SETTINGS, ...saved };
} catch (_) {}

function getUiScale() {
  return Math.max(1, Math.min(1.85, window.innerWidth / 1380));
}

function updateLayout() {
  const scale = getUiScale();
  const fw    = Math.round(settings.flagSize * scale);
  const fh    = Math.round(fw * 0.72);
  const root  = document.documentElement;
  root.style.setProperty('--ui-scale',     scale);
  root.style.setProperty('--flag-frame-w', fw + 'px');
  root.style.setProperty('--flag-frame-h', fh + 'px');
}

function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
}

function applySettings() {
  applyTheme(settings.theme);

  const sizeRange = document.getElementById('flag-size-range');
  const sizeLbl   = document.getElementById('flag-size-lbl');
  if (sizeRange) sizeRange.value = settings.flagSize;
  if (sizeLbl)   sizeLbl.textContent = settings.flagSize;

  document.querySelectorAll('.sg-opt').forEach(btn => {
    const key = btn.dataset.key;
    const val = btn.dataset.val;
    if (!key) return;
    btn.classList.toggle('active', String(settings[key]) === val);
  });

  // Best score widget
  const bestEl  = document.getElementById('best-score');
  if (bestEl) {
    const hs   = parseFloat(localStorage.getItem('fg_r_hs') || '0');
    const show = settings.showHighScore && hs > 0 && currentMode === 'classic';
    bestEl.classList.toggle('hidden', !show);
    if (show) document.getElementById('best-score-val').textContent = hs.toFixed(1);
  }

  applyI18n();
  updateLayout();
}

function saveSetting(key, val) {
  settings[key] = val;
  localStorage.setItem('fg_settings', JSON.stringify(settings));

  if (key === 'lang') {
    loadCountryNames(val).then(applyI18n);
  }
  if (key === 'cardWatermark') {
    for (let i = 0; i < 8; i++) {
      if (slots[i]) updateCardWatermark(i);
    }
  }

  applySettings();
}

// ═══ PHASE 1: DROPDOWNS / MODE SWITCHING ═════════════════

function closeAllDropdowns() {
  document.querySelectorAll('.hdr-dd').forEach(d => d.classList.remove('open'));
  document.querySelectorAll('.chevron').forEach(c => c.classList.remove('flipped'));
  document.querySelectorAll('.hdr-btn').forEach(b => b.classList.remove('active-btn'));
}

function toggleDropdown(ddId, chevronId, btnId) {
  const dd      = document.getElementById(ddId);
  const ch      = document.getElementById(chevronId);
  const btn     = document.getElementById(btnId);
  const wasOpen = dd.classList.contains('open');
  closeAllDropdowns();
  if (!wasOpen) {
    dd.classList.add('open');
    if (ch)  ch.classList.add('flipped');
    if (btn) btn.classList.add('active-btn');
  }
}

let currentMode = 'classic';

function switchMode(mode) {
  currentMode = mode;
  closeAllDropdowns();

  document.getElementById('classic-game').classList.toggle('active', mode === 'classic');
  document.getElementById('duel-game').classList.toggle('active', mode === 'duel');
  document.getElementById('reveal-game').classList.toggle('active', mode === 'reveal');
  const soonEl = document.getElementById('coming-soon');
  const isSoon = mode === 'puzzle';
  soonEl.classList.toggle('active', isSoon);
  if (isSoon) {
    document.getElementById('coming-soon-sub').textContent =
      t('flagPuzzle') + ' will follow the same design language';
  }

  // Cleanup reveal timers when leaving
  if (mode !== 'reveal') cleanupReveal();

  document.getElementById('progress-widget').classList.toggle('hidden', mode !== 'classic');
  document.getElementById('mode-label').textContent =
    t(mode === 'classic' ? 'flagGame' : mode === 'duel' ? 'flagDuel' :
      mode === 'reveal' ? 'flagReveal' : 'flagPuzzle');

  document.querySelectorAll('.mode-item').forEach(item => {
    item.classList.toggle('active', item.dataset.mode === mode);
  });

  if (mode === 'duel'   && dataReady) initDuel();
  if (mode === 'reveal' && dataReady) initReveal();

  applySettings(); // refresh best-score visibility
}

// ═══ DOM INIT ════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {

  // ── Phase 1: layout + settings ──
  applySettings();
  window.addEventListener('resize', updateLayout);

  // Keep roll button disabled until rankings + categories are loaded.
  // applySettings() above enables it (phase='idle'), but initGame() hasn't run yet.
  document.getElementById('roll-btn').disabled = true;

  // ── Milestones ──
  document.getElementById('milestones-btn').addEventListener('click', () => {
    closeAllDropdowns();
    const hs      = parseFloat(localStorage.getItem('fg_r_hs')      || '0');
    const duelH   = parseInt(localStorage.getItem('fg_duel_hs')     || '0', 10);
    const revealH = parseInt(localStorage.getItem('fg_reveal_hs')   || '0', 10);
    const puzzleH = parseInt(localStorage.getItem('fg_puzzle_hs')   || '0', 10);
    const set = (id, val, isZero) => {
      document.getElementById(id).textContent = isZero ? '—' : val;
      document.getElementById(id).classList.toggle('none', isZero);
    };
    set('ms-classic', hs.toFixed(1),  hs      === 0);
    set('ms-duel',    duelH,           duelH   === 0);
    set('ms-reveal',  revealH,         revealH === 0);
    set('ms-puzzle',  puzzleH,         puzzleH === 0);
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
  document.querySelectorAll('.sg-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.key;
      let   val = btn.dataset.val;
      if (val === 'true')  val = true;
      if (val === 'false') val = false;
      saveSetting(key, val);
    });
  });
  document.getElementById('flag-size-range').addEventListener('input', e => {
    saveSetting('flagSize', parseInt(e.target.value, 10));
  });

  // Close dropdowns on outside click
  document.addEventListener('click', closeAllDropdowns);
  document.querySelectorAll('.hdr-dd').forEach(dd => {
    dd.addEventListener('click', e => e.stopPropagation());
  });

  // ── Phase 2: Classic game event handlers ──

  document.getElementById('roll-btn').addEventListener('click', () => {
    if (phase === 'idle' || (phase === 'placing' && skipsLeft > 0)) {
      startRoll();
    }
  });

  for (let i = 0; i < 8; i++) {
    const idx = i; // capture for closure
    document.getElementById(`cat-${idx}`).addEventListener('click', () => {
      placeFlag(idx);
    });
  }

  document.getElementById('play-again-btn').addEventListener('click', initGame);
  document.getElementById('share-btn').addEventListener('click', handleShare);

  // ── Phase 5: Flag Duel event handlers ──
  [0, 1].forEach(idx => {
    document.getElementById(`duel-card-${idx}`).addEventListener('click', () => {
      handleDuelPick(idx);
    });
  });
  document.getElementById('duel-next-btn').addEventListener('click', setupNewDuel);

  // ── Flag Reveal event handlers ──
  document.getElementById('rv-submit').addEventListener('click', handleRevealGuess);
  document.getElementById('rv-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleRevealGuess();
  });
  document.getElementById('rv-skip-btn').addEventListener('click', handleRevealSkip);
  document.getElementById('rv-results-play-again').addEventListener('click', () => {
    document.getElementById('rv-results-overlay').classList.add('hidden');
    initReveal();
  });

  // ── Load ranking data, then start the appropriate game ──
  const types = [
    'hdi','olympic','population','highest-elevation',
    'life-expectancy','land-area','average-temperature','gdp-per-capita',
  ];
  window.dataLoader.loadAllRankings(types).then(r => {
    rankings = r;
    return loadCountryNames(settings.lang);
  }).then(() => {
    dataReady = true;
    initGame();
    if (currentMode === 'duel')   initDuel();
    if (currentMode === 'reveal') initReveal();
  });
});

// ═══════════════════════════════════════════════════════════
// FLAG REVEAL
// ═══════════════════════════════════════════════════════════

// ── Fuzzy country-name matching ───────────────────────────
const COUNTRY_ALIASES = {
  'usa':'United States','us':'United States','america':'United States',
  'united states of america':'United States',
  'uk':'United Kingdom','britain':'United Kingdom',
  'great britain':'United Kingdom','england':'United Kingdom',
  'uae':'United Arab Emirates','emirates':'United Arab Emirates',
  'drc':'Democratic Republic of the Congo',
  'dr congo':'Democratic Republic of the Congo',
  'congo dr':'Democratic Republic of the Congo',
  'republic of congo':'Republic of the Congo',
  'congo republic':'Republic of the Congo',
  'dprk':'North Korea','north corea':'North Korea',
  'south corea':'South Korea','korea':'South Korea',
  'czech':'Czech Republic','czechia':'Czech Republic',
  "cote d'ivoire":'Ivory Coast',"côte d'ivoire":'Ivory Coast',
  'cote divoire':'Ivory Coast',
  'trinidad':'Trinidad and Tobago',
  'st kitts':'Saint Kitts and Nevis','saint kitts':'Saint Kitts and Nevis',
  'st lucia':'Saint Lucia',
  'st vincent':'Saint Vincent and the Grenadines',
  'saint vincent':'Saint Vincent and the Grenadines',
  'bosnia':'Bosnia and Herzegovina','bih':'Bosnia and Herzegovina',
  'macedonia':'North Macedonia',
  'sao tome':'Sao Tome and Principe',
  'timor':'Timor-Leste','east timor':'Timor-Leste',
  'swaziland':'Eswatini','burma':'Myanmar',
  'holland':'Netherlands','persia':'Iran',
  'ivory coast':'Ivory Coast',
};

function matchCountryName(input) {
  const clean = input.trim().toLowerCase().replace(/[^\w\s'\-]/g, '');
  if (clean.length < 2) return null;
  const alias = COUNTRY_ALIASES[clean];
  if (alias) {
    const found = COUNTRIES.find(c => c.name === alias);
    if (found) return found.name;
  }
  const exact = COUNTRIES.find(c => c.name.toLowerCase() === clean);
  if (exact) return exact.name;
  if (clean.length >= 3) {
    const prefix = COUNTRIES.find(c => c.name.toLowerCase().startsWith(clean));
    if (prefix) return prefix.name;
  }
  if (clean.length >= 4) {
    const contains = COUNTRIES.find(c => c.name.toLowerCase().includes(clean));
    if (contains) return contains.name;
  }
  return null;
}

// ── Sound synthesis ───────────────────────────────────────
function playSound(type) {
  if (!settings.sound) return;
  try {
    const ctx  = new (window.AudioContext || window.webkitAudioContext)();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(660, ctx.currentTime);
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.08);
      osc.frequency.setValueAtTime(1100, ctx.currentTime + 0.16);
      gain.gain.setValueAtTime(0.28, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.36);
      osc.start(); osc.stop(ctx.currentTime + 0.36);
    } else {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.28);
      gain.gain.setValueAtTime(0.30, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.30);
      osc.start(); osc.stop(ctx.currentTime + 0.30);
    }
    osc.onended = () => ctx.close();
  } catch (_) {}
}

// ── Reveal state ──────────────────────────────────────────
const rv = {
  active: false, country: null,
  flagNum: 0, lives: 3, skips: 3,
  totalScore: 0, possible: 500, tilesLeft: 0,
  tileTimer: null, countdownTimer: null, countdown: 30,
  answered: false, usedIndices: new Set(),
  results: [],    // { country, correct, pts } — one entry per flag faced
};

function cleanupReveal() {
  clearInterval(rv.tileTimer);
  clearInterval(rv.countdownTimer);
  rv.active = false;
}

function initReveal() {
  cleanupReveal();
  rv.lives = 3; rv.skips = 3;
  rv.totalScore = 0; rv.flagNum = 0;
  rv.usedIndices = new Set();
  rv.results = [];

  document.getElementById('rv-results-overlay').classList.add('hidden');
  updateRevealLives();
  updateRevealSkips();
  document.getElementById('rv-total').textContent = '0';
  setRevealInputsDisabled(false);
  setupRevealRound();
}

function setupRevealRound() {
  rv.flagNum++;
  rv.answered = false;
  rv.possible = 500;
  rv.tilesLeft = 0;

  clearInterval(rv.tileTimer);
  clearInterval(rv.countdownTimer);

  // Pick an unused country
  const available = COUNTRIES.map((c, i) => i).filter(i => !rv.usedIndices.has(i));
  const pickIdx   = available[Math.floor(Math.random() * available.length)];
  rv.country = COUNTRIES[pickIdx];
  rv.usedIndices.add(pickIdx);

  // Update HUD
  const flagNumEl = document.getElementById('rv-flag-num');
  flagNumEl.textContent = t('flagOf').replace('{0}', rv.flagNum);

  // Set flag image
  const flagImg = document.getElementById('rv-flag-img');
  flagImg.style.backgroundImage = `url(${rv.country.flagUrl})`;
  const flagWrap = document.getElementById('rv-flag-wrap');
  flagWrap.classList.remove('correct-glow', 'shake');

  // Build tile grid
  buildRevealGrid();

  // Reset UI
  document.getElementById('rv-possible').textContent = '500';
  const fb = document.getElementById('rv-feedback');
  fb.textContent = ''; fb.className = 'rv-feedback';
  const inp = document.getElementById('rv-input');
  inp.value = '';

  // Start 30s countdown
  rv.countdown = 30;
  updateRevealTimerDisplay();
  rv.countdownTimer = setInterval(tickRevealCountdown, 1000);

  // Start tile reveal (1.5s interval)
  rv.tileTimer = setInterval(revealOneTile, 1500);

  rv.active = true;
  setTimeout(() => document.getElementById('rv-input').focus(), 80);
}

function buildRevealGrid() {
  const grid = document.getElementById('rv-grid');
  grid.innerHTML = '';
  const dirs = ['up','down','left','right'];
  for (let i = 0; i < 16; i++) {
    const tile = document.createElement('div');
    tile.className = 'rv-tile';
    tile.dataset.dir = dirs[Math.floor(Math.random() * 4)];
    grid.appendChild(tile);
  }
}

function revealOneTile() {
  const tiles = document.querySelectorAll('#rv-grid .rv-tile:not(.rv-tile-gone)');
  if (tiles.length === 0) {
    clearInterval(rv.tileTimer); // All tiles gone; countdown still runs — player can still guess
    return;
  }
  const tile = tiles[Math.floor(Math.random() * tiles.length)];
  slideTileOff(tile, () => {
    rv.tilesLeft++;
    const newPossible = Math.max(100, 500 - rv.tilesLeft * 25);
    animateScoreCount(rv.possible, newPossible, document.getElementById('rv-possible'));
    rv.possible = newPossible;
  });
}

function slideTileOff(tile, onDone) {
  if (tile.classList.contains('rv-tile-gone')) return;
  tile.classList.add('rv-tile-gone');
  const dir = tile.dataset.dir || 'up';
  tile.style.setProperty('--tile-tx', dir === 'left' ? '-140%' : dir === 'right' ? '140%' : '0');
  tile.style.setProperty('--tile-ty', dir === 'up'   ? '-140%' : dir === 'down'  ? '140%' : '0');
  tile.classList.add('sliding');
  // Keep tile in DOM — animation fill-mode:forwards holds it at opacity:0.
  // Removing it from the grid would cause grid reflow and shift remaining tiles.
  setTimeout(() => { if (onDone) onDone(); }, 420);
}

function slideAllTilesOff(onDone) {
  const dirs  = ['up','down','left','right'];
  const tiles = Array.from(document.querySelectorAll('#rv-grid .rv-tile:not(.rv-tile-gone)'));
  if (tiles.length === 0) { if (onDone) onDone(); return; }
  tiles.forEach((tile, i) => {
    tile.classList.add('rv-tile-gone');
    const dir = dirs[Math.floor(Math.random() * 4)];
    tile.style.setProperty('--tile-tx', dir === 'left' ? '-140%' : dir === 'right' ? '140%' : '0');
    tile.style.setProperty('--tile-ty', dir === 'up'   ? '-140%' : dir === 'down'  ? '140%' : '0');
    tile.style.animationDelay = `${i * 18}ms`;
    tile.classList.add('sliding');
  });
  // Keep tiles in DOM — see slideTileOff comment
  setTimeout(() => { if (onDone) onDone(); }, tiles.length * 18 + 420);
}

function tickRevealCountdown() {
  rv.countdown--;
  updateRevealTimerDisplay();
  if (rv.countdown <= 0 && !rv.answered) {
    clearInterval(rv.countdownTimer);
    handleRevealTimeUp();
  }
}

function updateRevealTimerDisplay() {
  const el = document.getElementById('rv-timer');
  el.textContent = rv.countdown;
  el.className = 'rv-timer' +
    (rv.countdown <= 7 ? ' urgent' : rv.countdown <= 15 ? ' warning' : '');
}

function handleRevealGuess() {
  if (!rv.active || rv.answered) return;
  const inp = document.getElementById('rv-input');
  const raw = inp.value.trim();
  if (!raw) return;

  const matched = matchCountryName(raw);
  inp.value = '';

  if (!matched) {
    shakeRevealFlag();
    playSound('wrong');
    setRevealFeedback('Not a recognised country name', 'wrong');
    return;
  }
  if (matched === rv.country.name) {
    handleRevealCorrect();
  } else {
    handleRevealWrong();
  }
}

function handleRevealCorrect() {
  rv.answered = true;
  clearInterval(rv.tileTimer); clearInterval(rv.countdownTimer);
  playSound('correct');

  slideAllTilesOff(() => {
    document.getElementById('rv-flag-wrap').classList.add('correct-glow');
  });

  rv.totalScore += rv.possible;
  document.getElementById('rv-total').textContent = rv.totalScore;
  showFloatingScore(rv.possible);
  setRevealFeedback(`${rv.country.name} ✓  +${rv.possible} pts`, 'correct');

  rv.results.push({ country: rv.country, correct: true, pts: rv.possible });

  // Save high score incrementally
  const hs = parseInt(localStorage.getItem('fg_reveal_hs') || '0', 10);
  if (rv.totalScore > hs) localStorage.setItem('fg_reveal_hs', rv.totalScore);

  setTimeout(() => {
    if (rv.flagNum < 15) setupRevealRound();
    else endReveal();
  }, 1300);
}

function handleRevealWrong() {
  rv.lives--;
  updateRevealLives();
  playSound('wrong');
  shakeRevealFlag();

  if (rv.lives <= 0) {
    rv.answered = true;
    clearInterval(rv.tileTimer); clearInterval(rv.countdownTimer);
    rv.results.push({ country: rv.country, correct: false, pts: 0 });
    setRevealFeedback(`It was ${rv.country.name}`, 'wrong');
    slideAllTilesOff(null);
    setTimeout(endReveal, 1600);
  } else {
    setRevealFeedback(`Wrong — ${rv.lives} ${rv.lives !== 1 ? 'lives' : 'life'} left`, 'wrong');
    setTimeout(() => document.getElementById('rv-input').focus(), 80);
  }
}

function handleRevealSkip() {
  if (!rv.active || rv.answered) return;
  rv.answered = true;
  clearInterval(rv.tileTimer); clearInterval(rv.countdownTimer);

  rv.skips--;
  updateRevealSkips();
  if (rv.skips <= 0) document.getElementById('rv-skip-btn').disabled = true;

  rv.results.push({ country: rv.country, correct: false, pts: 0 });
  setRevealFeedback(`Skipped — it was ${rv.country.name}`, 'wrong');
  slideAllTilesOff(null);
  setTimeout(() => {
    if (rv.flagNum < 15) setupRevealRound();
    else endReveal();
  }, 1400);
}

function handleRevealTimeUp() {
  rv.answered = true;
  clearInterval(rv.tileTimer);
  rv.results.push({ country: rv.country, correct: false, pts: 0 });
  setRevealFeedback(`Time's up! It was ${rv.country.name}`, 'wrong');
  slideAllTilesOff(null);
  setTimeout(() => {
    if (rv.flagNum < 15) setupRevealRound();
    else endReveal();
  }, 1500);
}

function endReveal() {
  cleanupReveal();
  setRevealInputsDisabled(true);

  const savedHs = parseInt(localStorage.getItem('fg_reveal_hs') || '0', 10);
  const isNew   = rv.totalScore > savedHs;
  if (isNew) localStorage.setItem('fg_reveal_hs', rv.totalScore);

  // Build flag-by-flag results list
  const list = document.getElementById('rv-results-list');
  list.innerHTML = '';
  rv.results.forEach(r => {
    const row = document.createElement('div');
    row.className = 'rv-result-row ' + (r.correct ? 'rv-result-correct' : 'rv-result-wrong');
    const pts = r.correct ? `<div class="rv-result-pts">+${r.pts}</div>` : '';
    row.innerHTML = `
      <div class="rv-result-thumb" style="background-image:url(${r.country.flagUrl})"></div>
      <div class="rv-result-name">${cn(r.country.name)}</div>
      <div class="rv-result-mark">${r.correct ? '✓' : '✗'}</div>
      ${pts}
    `;
    list.appendChild(row);
  });

  document.getElementById('rv-results-total').textContent = rv.totalScore;
  document.getElementById('rv-results-hs').textContent    = isNew
    ? t('newHighScore')
    : `Best: ${Math.max(savedHs, rv.totalScore)}`;
  document.getElementById('rv-results-overlay').classList.remove('hidden');
}

// ── HUD helpers ───────────────────────────────────────────
function updateRevealLives() {
  for (let i = 0; i < 3; i++) {
    const el = document.getElementById(`rv-life-${i}`);
    const wasOn = el.classList.contains('on');
    el.classList.toggle('on',  i < rv.lives);
    el.classList.toggle('off', i >= rv.lives);
    if (wasOn && i >= rv.lives) {
      el.classList.add('pulse');
      setTimeout(() => el.classList.remove('pulse'), 400);
    }
  }
}

function updateRevealSkips() {
  for (let i = 0; i < 3; i++) {
    const el = document.getElementById(`rv-skip-${i}`);
    el.classList.toggle('on',  i < rv.skips);
    el.classList.toggle('off', i >= rv.skips);
  }
}

function setRevealFeedback(msg, cls) {
  const fb = document.getElementById('rv-feedback');
  fb.textContent = msg;
  fb.className = 'rv-feedback' + (cls ? ` ${cls}` : '');
}

function setRevealInputsDisabled(disabled) {
  document.getElementById('rv-input').disabled  = disabled;
  document.getElementById('rv-submit').disabled = disabled;
  document.getElementById('rv-skip-btn').disabled = disabled;
}

function shakeRevealFlag() {
  const wrap = document.getElementById('rv-flag-wrap');
  wrap.classList.remove('shake');
  void wrap.offsetWidth;
  wrap.classList.add('shake');
  setTimeout(() => wrap.classList.remove('shake'), 400);
}

function showFloatingScore(pts) {
  const wrap = document.getElementById('rv-flag-wrap');
  const el   = document.createElement('div');
  el.className   = 'rv-float-score';
  el.textContent = `+${pts}`;
  wrap.appendChild(el);
  setTimeout(() => el.remove(), 1200);
}

function animateScoreCount(from, to, el) {
  const diff  = from - to;
  if (diff <= 0) { el.textContent = to; return; }
  const steps = 8;
  let   step  = 0;
  const id    = setInterval(() => {
    step++;
    el.textContent = Math.round(from - diff * step / steps);
    if (step >= steps) { clearInterval(id); el.textContent = to; }
  }, 22);
}
