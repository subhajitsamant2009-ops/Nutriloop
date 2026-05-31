/* ─── WATER TRACKER ─────────────────────────────────────────── */
let waterCount = 0;

const WATER_MSGS = [
  'Stay hydrated!',
  'Great start! Keep going.',
  'Halfway there! 👍',
  'Almost at your goal!',
  'Goal reached! 🎉 Well done!',
  'Outstanding hydration! 💧',
];

function renderWater() {
  document.getElementById('water-count').textContent = waterCount;
  document.getElementById('water-label').textContent =
    `glass${waterCount !== 1 ? 'es' : ''} of water today`;

  document.getElementById('water-visual').innerHTML = Array.from({ length: 8 }, (_, i) =>
    `<div class="water-cup${i < waterCount ? ' filled' : ''}"
          onclick="changeWater(${i < waterCount ? -1 : 1})"></div>`
  ).join('');

  const msgIdx = Math.min(Math.floor(waterCount / 2), WATER_MSGS.length - 1);
  document.getElementById('water-msg').textContent =
    waterCount > 0 ? WATER_MSGS[msgIdx] : '';
}

function changeWater(d) {
  waterCount = Math.max(0, Math.min(8, waterCount + d));
  renderWater();
}
