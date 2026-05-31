/* ─── MEAL LOG ──────────────────────────────────────────────── */
let mealLog = [];

function logSelectedFood() {
  if (!selectedFood) return;
  const r = qty / 100;
  mealLog.push({
    name: selectedFood.label,
    icon: selectedFood.icon,
    qty,
    cal:  Math.round(selectedFood.cal  * r),
    pro:  +(selectedFood.pro  * r).toFixed(1),
    carb: +(selectedFood.carb * r).toFixed(1),
  });
  renderLog();
  alert(`${selectedFood.label} added to your meal log!`);
}

function addCustomLog() {
  const name = document.getElementById('log-name').value.trim();
  const cal  = parseInt(document.getElementById('log-cal-input').value) || 0;
  if (!name) return;
  mealLog.push({ name, icon: '🍽️', qty: '—', cal, pro: 0, carb: 0 });
  document.getElementById('log-name').value      = '';
  document.getElementById('log-cal-input').value = '';
  renderLog();
}

function deleteLog(i) {
  mealLog.splice(i, 1);
  renderLog();
}

function renderLog() {
  const totalCal  = mealLog.reduce((a, e) => a + e.cal,  0);
  const totalPro  = mealLog.reduce((a, e) => a + e.pro,  0);
  const totalCarb = mealLog.reduce((a, e) => a + e.carb, 0);

  document.getElementById('log-total-cal').textContent  = totalCal;
  document.getElementById('log-total-pro').textContent  = totalPro.toFixed(1)  + 'g';
  document.getElementById('log-total-carb').textContent = totalCarb.toFixed(1) + 'g';

  const list = document.getElementById('log-list');
  if (mealLog.length === 0) {
    list.innerHTML = '<div class="empty-state"><i class="ti ti-clipboard-list"></i>No entries yet. Search a food and tap "Add to Log".</div>';
    return;
  }
  list.innerHTML = mealLog.map((e, i) => `
    <div class="log-entry">
      <span class="log-icon">${e.icon}</span>
      <div class="log-info">
        <div class="name">${e.name}</div>
        <div class="meta">${e.qty !== '—' ? e.qty + 'g · ' : ''}${e.pro}g protein · ${e.carb}g carbs</div>
      </div>
      <span class="log-cal">${e.cal} kcal</span>
      <button class="log-del" onclick="deleteLog(${i})"><i class="ti ti-trash"></i></button>
    </div>`).join('');
}
