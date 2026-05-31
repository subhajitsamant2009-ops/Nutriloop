/* ─── THEME ─────────────────────────────────────────────────── */
let dark = false;

function toggleTheme() {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : '');
  document.getElementById('theme-icon').className = dark ? 'ti ti-sun' : 'ti ti-moon-stars';
}
