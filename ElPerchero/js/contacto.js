import { obtenerTodos, crear, borrar } from './almacen.js';
import { validarRequerido, validarEmail, validarTelefono, validarLongitudMensaje, validarCheckbox } from './validacion.js';

const form = document.getElementById('form-contacto');
const listaMensajes = document.getElementById('lista-mensajes');

const campos = {
  nombre: document.getElementById('nombre-contacto'),
  correo: document.getElementById('correo-contacto'),
  telefono: document.getElementById('telefono-contacto'),
  motivo: document.querySelectorAll('input[name="motivo"]'),
  llamar: document.getElementById('llamar-contacto'),
  mensaje: document.getElementById('mensaje-contacto')
};

const errores = {
  nombre: document.getElementById('error-nombre-contacto'),
  correo: document.getElementById('error-correo-contacto'),
  telefono: document.getElementById('error-telefono-contacto'),
  motivo: document.getElementById('error-motivo-contacto'),
  mensaje: document.getElementById('error-mensaje-contacto')
};

const contador = document.getElementById('contador-mensaje');

let mensajesEnviados = [];

function init() {
  cargarCookie();
  actualizarContador();

  Object.values(campos).forEach(campo => {
    if (Array.isArray(campo)) {
      campo.forEach(radio => {
        radio.addEventListener('blur', () => validarCampo(radio));
        radio.addEventListener('input', () => {
          radio.dataset.tocado = 'true';
          validarCampo(radio);
        });
      });
    } else {
      campo.addEventListener('blur', () => validarCampo(campo));
      campo.addEventListener('input', () => {
        campo.dataset.tocado = 'true';
        if (campo.id === 'mensaje-contacto') actualizarContador();
        validarCampo(campo);
      });
    }
  });

  campos.llamar.addEventListener('change', () => {
    validarCampo(campos.telefono);
  });

  form.addEventListener('submit', manejarSubmit);

  renderizarMensajes();
}

function cargarCookie() {
  const nombre = obtenerCookie('contacto_nombre');
  const correo = obtenerCookie('contacto_correo');
  if (nombre) campos.nombre.value = nombre;
  if (correo) campos.correo.value = correo;
}

function establecerCookie(nombre, correo) {
  const fecha = new Date();
  fecha.setDate(fecha.getDate() + 30);
  document.cookie = `contacto_nombre=${encodeURIComponent(nombre)}; expires=${fecha.toUTCString()}; path=/`;
  document.cookie = `contacto_correo=${encodeURIComponent(correo)}; expires=${fecha.toUTCString()}; path=/`;
}

function obtenerCookie(nombre) {
  const cookies = document.cookie.split('; ');
  for (const c of cookies) {
    const [key, ...valorPartes] = c.split('=');
    if (key === nombre) return decodeURIComponent(valorPartes.join('='));
  }
  return null;
}

function actualizarContador() {
  const longitud = campos.mensaje.value.trim().length;
  contador.textContent = `${longitud} / 500`;
}

function validarCampo(campo) {
  campo.dataset.tocado = 'true';
  let valor = campo.value;
  let error = null;

  if (campo.type === 'checkbox') {
    valor = campo.checked;
    error = validarCheckbox(valor);
  } else if (Array.isArray(campo)) {
    const seleccionado = Array.from(campo).some(r => r.checked);
    error = seleccionado ? null : 'Selecciona un motivo';
  } else {
    switch (campo.id) {
    case 'nombre-contacto':
      error = validarRequerido(valor);
      break;
    case 'correo-contacto':
      error = validarEmail(valor);
      break;
    case 'telefono-contacto':
      if (campos.llamar.checked) {
        error = validarRequerido(valor);
      } else {
        error = validarTelefono(valor);
      }
      break;
    case 'mensaje-contacto':
      error = validarLongitudMensaje(valor, 10, 500);
      break;
    }
  }

  mostrarError(campo.id, error);
  return !error;
}

function mostrarError(idCampo, mensaje) {
  const campo = document.getElementById(idCampo);
  const errorElem = errores[idCampo.replace('contacto_', '')] || errores[idCampo];
  if (!errorElem) return;

  const errorId = `error-${idCampo}`;
  if (mensaje) {
    campo.classList.add('error');
    campo.setAttribute('aria-invalid', 'true');
    errorElem.textContent = mensaje;
    errorElem.id = errorId;
    campo.setAttribute('aria-describedby', errorId);
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
    { id: 'nombre-contacto', fn: () => validarCampo(campos.nombre) },
    { id: 'correo-contacto', fn: () => validarCampo(campos.correo) },
    { id: 'telefono-contacto', fn: () => validarCampo(campos.telefono) },
    { id: 'motivo', fn: () => validarCampo(campos.motivo) },
    { id: 'mensaje-contacto', fn: () => validarCampo(campos.mensaje) }
  ];

  checks.forEach(({ id, fn }) => {
    const valido = fn();
    if (!valido) {
      esValido = false;
      if (!primerCampoConError) primerCampoConError = document.getElementById(id);
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

  const mensaje = {
    id: Date.now().toString(),
    nombre: campos.nombre.value.trim(),
    correo: campos.correo.value.trim(),
    telefono: campos.telefono.value.trim(),
    motivo: Array.from(campos.motivo).find(r => r.checked).value,
    llamar: campos.llamar.checked,
    texto: campos.mensaje.value.trim(),
    fecha: new Date().toISOString()
  };

  crear('mensajes', mensaje);
  establecerCookie(mensaje.nombre, mensaje.correo);

  form.reset();
  actualizarContador();
  renderizarMensajes();

  window.dispatchEvent(new Event('mensajesActualizados'));
}

function crearElementoMensaje(m) {
  const contenedor = document.createElement('div');
  contenedor.className = 'mensaje-enviado';
  contenedor.dataset.id = m.id;

  const motivo = document.createElement('div');
  motivo.className = 'motivo';
  motivo.textContent = m.motivo;
  contenedor.appendChild(motivo);

  const autor = document.createElement('div');
  const nombre = document.createElement('strong');
  nombre.textContent = m.nombre;
  const correo = document.createElement('span');
  correo.textContent = `(${m.correo})`;
  autor.appendChild(nombre);
  autor.appendChild(correo);
  contenedor.appendChild(autor);

  const texto = document.createElement('div');
  texto.className = 'texto';
  texto.textContent = m.texto;
  contenedor.appendChild(texto);

  if (m.telefono) {
    const telefono = document.createElement('div');
    telefono.textContent = `Tel: ${m.telefono}`;
    contenedor.appendChild(telefono);
  }

  const fecha = document.createElement('div');
  fecha.className = 'fecha';
  fecha.textContent = new Date(m.fecha).toLocaleString();
  contenedor.appendChild(fecha);

  const btnBorrar = document.createElement('button');
  btnBorrar.className = 'btn-eliminar-mensaje';
  btnBorrar.dataset.id = m.id;
  btnBorrar.textContent = 'Borrar';
  contenedor.appendChild(btnBorrar);

  return contenedor;
}

function renderizarMensajes() {
  mensajesEnviados = obtenerTodos('mensajes');
  listaMensajes.innerHTML = '';

  if (!mensajesEnviados.length) {
    const vacio = document.createElement('p');
    vacio.className = 'estado-vacio';
    vacio.textContent = 'No hay mensajes enviados.';
    listaMensajes.appendChild(vacio);
    return;
  }

  mensajesEnviados.forEach(m => {
    listaMensajes.appendChild(crearElementoMensaje(m));
  });
}

function manejarBorrado(e) {
  const btn = e.target.closest('.btn-eliminar-mensaje');
  if (!btn) return;

  const id = btn.dataset.id;
  if (confirm('¿Estás seguro de que quieres borrar este mensaje?')) {
    borrar('mensajes', id);
    renderizarMensajes();
    window.dispatchEvent(new Event('mensajesActualizados'));
  }
}

listaMensajes.addEventListener('click', manejarBorrado);

init();
