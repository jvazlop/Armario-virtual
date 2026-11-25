const path = window.location.pathname.split('/').pop() || 'index.html';
const SESION_KEY = 'elperchero_sesion';

function setupIndex() {
  if (!localStorage.getItem(SESION_KEY)) {
    window.location.href = 'login.html';
  }

  const btn = document.getElementById('btn-cerrar-sesion');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem(SESION_KEY);
      window.location.href = 'login.html';
    });
  }
}

function bloquearMenu() {
  const enlaces = document.querySelectorAll('.menu a');
  enlaces.forEach(enlace => {
    const href = enlace.getAttribute('href');
    if (href !== 'login.html' && href !== 'registro.html') {
      enlace.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      enlace.style.pointerEvents = 'none';
      enlace.style.opacity = '0.5';
      enlace.style.cursor = 'not-allowed';
    }
  });
}

function setupLogin() {
  bloquearMenu();
  document.querySelectorAll('.pestana').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.pestana === 'registro') {
        window.location.href = 'registro.html';
      }
    });
  });
}

function setupRegistro() {
  bloquearMenu();
  document.querySelectorAll('.pestana').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.pestana === 'login') {
        window.location.href = 'login.html';
      }
    });
  });
}

if (path === 'index.html') {
  setupIndex();
} else if (path === 'login.html') {
  setupLogin();
} else if (path === 'registro.html') {
  setupRegistro();
}
