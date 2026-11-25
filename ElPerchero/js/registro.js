import { obtenerTodos, obtenerPorId, crear, actualizar } from './almacen.js';
import { validarRequerido, validarEmail, validarPassword, validarRepetirPassword, validarFechaNacimiento, validarCheckbox } from './validacion.js';

const form = document.getElementById('form-registro');

const campos = {
  usuario: document.getElementById('usuario'),
  correo: document.getElementById('correo'),
  contrasena: document.getElementById('contrasena'),
  repetirContrasena: document.getElementById('repetir-contrasena'),
  fechaNacimiento: document.getElementById('fecha-nacimiento'),
  terminos: document.getElementById('terminos'),
  notificaciones: document.getElementById('notificaciones')
};

const errores = {
  usuario: document.getElementById('error-usuario'),
  correo: document.getElementById('error-correo'),
  contrasena: document.getElementById('error-contrasena'),
  repetirContrasena: document.getElementById('error-repetir-contrasena'),
  fechaNacimiento: document.getElementById('error-fecha-nacimiento'),
  terminos: document.getElementById('error-terminos')
};

let modoEdicion = false;
let idEditando = null;

function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const idDesdeURL = urlParams.get('id');

  if (idDesdeURL) {
    modoEdicion = true;
    idEditando = idDesdeURL;
    const usuario = obtenerPorId('usuarios', idDesdeURL);
    if (usuario) {
      campos.usuario.value = usuario.usuario || '';
      campos.correo.value = usuario.correo || '';
      campos.fechaNacimiento.value = usuario.fechaNacimiento || '';
      campos.terminos.checked = usuario.terminos === true;
      campos.notificaciones.checked = usuario.notificaciones === true;
    }
  }

  Object.values(campos).forEach(campo => {
    campo.addEventListener('blur', () => validarCampo(campo));
    campo.addEventListener('input', () => {
      if (campo.dataset.tocado === 'true') {
        validarCampo(campo);
      }
    });
  });

  form.addEventListener('submit', manejarSubmit);
}

function validarCampo(campo) {
  campo.dataset.tocado = 'true';
  const valor = campo.type === 'checkbox' ? campo.checked : campo.value;
  let error = null;

  switch (campo.id) {
  case 'usuario':
    error = validarRequerido(valor);
    break;
  case 'correo':
    error = validarEmail(valor);
    break;
  case 'contrasena':
    if (!modoEdicion || valor) {
      error = validarPassword(valor);
    }
    break;
  case 'repetir-contrasena':
    if (!modoEdicion || valor) {
      error = validarRepetirPassword(valor, campos.contrasena.value);
    }
    break;
  case 'fecha-nacimiento':
    error = validarFechaNacimiento(valor);
    break;
  case 'terminos':
    error = validarCheckbox(valor);
    break;
  }

  mostrarError(campo.id, error);
  return !error;
}

function mostrarError(idCampo, mensaje) {
  const campo = campos[idCampo];
  const errorElem = errores[idCampo];
  if (!errorElem) return;

  if (mensaje) {
    campo.classList.add('error');
    campo.setAttribute('aria-invalid', 'true');
    errorElem.textContent = mensaje;
    errorElem.id = `error-${idCampo}`;
    campo.setAttribute('aria-describedby', `error-${idCampo}`);
  } else {
    campo.classList.remove('error');
    campo.setAttribute('aria-invalid', 'false');
    errorElem.textContent = '';
  }
}

function validarTodo() {
  let esValido = true;
  let primerCampoConError = null;

  const checks = [
    { id: 'usuario', fn: () => validarCampo(campos.usuario) },
    { id: 'correo', fn: () => validarCampo(campos.correo) },
    { id: 'contrasena', fn: () => {
      if (!modoEdicion || campos.contrasena.value) return validarCampo(campos.contrasena);
      return true;
    } },
    { id: 'repetir-contrasena', fn: () => {
      if (!modoEdicion || campos.repetirContrasena.value) return validarCampo(campos.repetirContrasena);
      return true;
    } },
    { id: 'fecha-nacimiento', fn: () => validarCampo(campos.fechaNacimiento) },
    { id: 'terminos', fn: () => validarCampo(campos.terminos) }
  ];

  checks.forEach(({ id, fn }) => {
    const valido = fn();
    if (!valido) {
      esValido = false;
      if (!primerCampoConError) primerCampoConError = campos[id];
    }
  });

  return { esValido, primerCampoConError };
}

function manejarSubmit(e) {
  e.preventDefault();

  const { esValido, primerCampoConError } = validarTodo();

  if (!esValido) {
    primerCampoConError.focus();
    return;
  }

  const dato = {
    usuario: campos.usuario.value.trim(),
    correo: campos.correo.value.trim(),
    fechaNacimiento: campos.fechaNacimiento.value,
    terminos: campos.terminos.checked,
    notificaciones: campos.notificaciones.checked
  };

  if (modoEdicion && idEditando) {
    actualizar('usuarios', idEditando, dato);
  } else {
    crear('usuarios', dato);
  }

  localStorage.setItem('usuarioActual', JSON.stringify({
    nombre: dato.usuario,
    correo: dato.correo
  }));

  form.reset();
  campos.terminos.checked = false;
  campos.notificaciones.checked = false;
  modoEdicion = false;
  idEditando = null;
  window.history.replaceState({}, document.title, window.location.pathname);

  window.dispatchEvent(new Event('usuariosActualizados'));
}

init();
