import { validarLogin } from './auth.js';

const form = document.getElementById('form-login');
if (form) {
  form.addEventListener('submit', (e) => {
    const { esValido, primerCampoConError } = validarLogin(form);
    if (!esValido) {
      e.preventDefault();
      primerCampoConError.focus();
    } else {
      e.preventDefault();
      localStorage.setItem('elperchero_sesion', 'true');
      window.location.href = 'index.html';
    }
  });
}
