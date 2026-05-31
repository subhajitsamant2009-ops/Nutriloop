/* ─── NUTRITION ─────────────────────────────────────────────── */
let selectedFood = null;
let qty = 100;
let filteredFoods = [...FOODS];

function renderFoodGrid() {
  const g = document.getElementById('food-grid');
  g.innerHTML = filteredFoods.map(f => `
    <div class="food-chip${selectedFood && selectedFood.id === f.id ? ' selected' : ''}"
         onclick="selectFood('${f.id}')">
      <span class="food-icon">${f.icon}</span>
      <span>${f.label}</span>
    </div>`).join('');
  document.getElementById('no-results').style.display =
    filteredFoods.length === 0 ? 'block' : 'none';
}

function filterFoods(q) {
  const s = q.trim().toLowerCase();
  filteredFoods = s ? FOODS.filter(f => f.label.toLowerCase().includes(s)) : [...FOODS];
  renderFoodGrid();
}

function selectFood(id) {
  selectedFood = FOODS.find(f => f.id === id);
  qty = 100;
  document.getElementById('qty-slider').value = 100;
  document.getElementById('qty-display').textContent = '100g';
  renderFoodGrid();
  renderNutrientPanel();
  document.getElementById('nutrient-panel').style.display = 'block';
}

function updateQty(v) {
  qty = parseInt(v);
  document.getElementById('qty-display').textContent = qty + 'g';
  renderNutrientPanel();
}

function renderNutrientPanel() {
  if (!selectedFood) return;
  const r = qty / 100;
  document.getElementById('panel-title').textContent = `${selectedFood.label} (${qty}g)`;
  document.getElementById('m-cal').textContent  = Math.round(selectedFood.cal  * r);
  document.getElementById('m-pro').textContent  = (selectedFood.pro  * r).toFixed(1) + 'g';
  document.getElementById('m-fat').textContent  = (selectedFood.fat  * r).toFixed(1) + 'g';
  document.getElementById('m-carb').textContent = (selectedFood.carb * r).toFixed(1) + 'g';

  document.getElementById('micro-bars').innerHTML = MICROS.map(m => {
    const val = selectedFood[m.key] * r;
    const pct = Math.min(100, (val / m.max) * 100);
    const disp = m.unit === 'mg' ? Math.round(val).toLocaleString() : val.toFixed(1);
    return `<div class="bar-row">
      <span class="bar-lbl">${m.label}</span>
      <div class="bar-track">
        <div class="bar-fill" style="width:${pct.toFixed(1)}%;background:${m.color};"></div>
      </div>
      <span class="bar-val">${disp}${m.unit}</span>
    </div>`;
  }).join('');
}
