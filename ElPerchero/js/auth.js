const SESION_KEY = 'elperchero_sesion';

export function verificarSesion() {
  if (!localStorage.getItem(SESION_KEY)) {
    window.location.href = 'login.html';
  }
}

export function cerrarSesion() {
  localStorage.removeItem(SESION_KEY);
  window.location.href = 'login.html';
}

export function validarLogin(form) {
  const correo = form.querySelector('input[name="correo"]');
  const contrasena = form.querySelector('input[name="contrasena"]');
  const errorCorreo = form.querySelector('#error-correo-login');
  const errorContrasena = form.querySelector('#error-contrasena-login');

  let esValido = true;
  let primerCampoConError = null;

  [correo, contrasena].forEach(c => {
    c.classList.remove('error');
    c.setAttribute('aria-invalid', 'false');
  });
  if (errorCorreo) errorCorreo.textContent = '';
  if (errorContrasena) errorContrasena.textContent = '';

  if (!correo.value.trim()) {
    mostrarErrorCampo(correo, errorCorreo, 'El correo es obligatorio');
    esValido = false;
    if (!primerCampoConError) primerCampoConError = correo;
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo.value.trim())) {
    mostrarErrorCampo(correo, errorCorreo, 'Introduce un correo electrónico válido');
    esValido = false;
    if (!primerCampoConError) primerCampoConError = correo;
  }

  if (!contrasena.value) {
    mostrarErrorCampo(contrasena, errorContrasena, 'La contraseña es obligatoria');
    esValido = false;
    if (!primerCampoConError) primerCampoConError = contrasena;
  }

  return { esValido, primerCampoConError };
}

function mostrarErrorCampo(campo, errorElem, mensaje) {
  campo.classList.add('error');
  campo.setAttribute('aria-invalid', 'true');
  if (errorElem) {
    errorElem.textContent = mensaje;
    errorElem.id = `error-${campo.id}`;
    campo.setAttribute('aria-describedby', `error-${campo.id}`);
  }
}
