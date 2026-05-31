/* ─── NAVIGATION ─────────────────────────────────────────────── */
function showPage(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.bnav-item').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
