import { marcarNavActivo } from './ui.js';

export function initNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  marcarNavActivo(path);
}
export function initPagina() {
  initNav();

  document.querySelectorAll('a[href^="#"]').forEach(ancla => {
    ancla.addEventListener('click', (e) => {
      const targetId = ancla.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initPagina);

export default {
  initNav,
  initPagina
};