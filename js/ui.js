// ui.js – Neon-Welle + Zufall-Entscheidungen (50/50)

function setMouseVars(el, clientX, clientY) {
  const rect = el.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  el.style.setProperty('--mx', x + 'px');
  el.style.setProperty('--my', y + 'px');
}

function enableNeonWave(selector) {
  const els = document.querySelectorAll(selector);
  els.forEach((el) => {
    // set defaults (center)
    el.style.setProperty('--mx', '50%');
    el.style.setProperty('--my', '50%');

    el.addEventListener('mousemove', (e) => setMouseVars(el, e.clientX, e.clientY));
    el.addEventListener('mouseenter', (e) => setMouseVars(el, e.clientX, e.clientY));
    // Touch / Pointer devices
    el.addEventListener('pointermove', (e) => setMouseVars(el, e.clientX, e.clientY));
  });
}

function enableRandomChoices() {
  const randomLinks = document.querySelectorAll('a.choice-random[data-a][data-b]');
  randomLinks.forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const tA = a.getAttribute('data-a');
      const tB = a.getAttribute('data-b');
      if (!tA || !tB) return;

      const target = (Math.random() < 0.5) ? tA : tB;
      window.location.href = target;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  enableNeonWave('a.choice, #footer a');
  enableRandomChoices();
});
