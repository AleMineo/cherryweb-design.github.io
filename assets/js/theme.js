const root = document.documentElement;
const toggles = document.querySelectorAll('.theme-toggle');
const mq = matchMedia('(prefers-color-scheme: dark)');

const system  = () => (mq.matches ? 'dark' : 'light');
const current = () => root.dataset.theme || system();

const sync = () =>
  toggles.forEach(btn => btn.setAttribute('aria-checked', current() === 'dark'));

toggles.forEach(btn => btn.addEventListener('click', () => {
  const next = current() === 'dark' ? 'light' : 'dark';

  try {
    if (next === system()) {
      // Matches the browser again: drop the override and follow it
      delete root.dataset.theme;
      localStorage.removeItem('theme');
    } else {
      root.dataset.theme = next;
      localStorage.setItem('theme', next);
    }
  } catch (e) {}

  sync();
}));

// Live update when the OS/browser switches (e.g. sunset auto dark mode)
mq.addEventListener('change', sync);
sync();