const EDAD_MINIMA = 14;

export function validarRequerido(valor) {
  if (typeof valor === 'boolean') {
    return valor ? null : 'Este campo es obligatorio';
  }
  if (valor === null || valor === undefined) {
    return 'Este campo es obligatorio';
  }
  if (typeof valor === 'string' && valor.trim() === '') {
    return 'Este campo es obligatorio';
  }
  return null;
}

export function validarEmail(valor) {
  const emailRequerido = validarRequerido(valor);
  if (emailRequerido) return emailRequerido;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(valor.trim())) {
    return 'Introduce un correo electrónico válido';
  }
  return null;
}

export function validarPassword(valor) {
  const requerido = validarRequerido(valor);
  if (requerido) return requerido;

  if (valor.length < 8) {
    return 'La contraseña debe tener al menos 8 caracteres';
  }
  if (!/[A-Z]/.test(valor)) {
    return 'La contraseña debe contener al menos una mayúscula';
  }
  if (!/[0-9]/.test(valor)) {
    return 'La contraseña debe contener al menos un número';
  }
  return null;
}

export function validarRepetirPassword(valor, passwordOriginal) {
  const requerido = validarRequerido(valor);
  if (requerido) return requerido;

  if (valor !== passwordOriginal) {
    return 'Las contraseñas no coinciden';
  }
  return null;
}

export function validarFechaNacimiento(valor) {
  const requerido = validarRequerido(valor);
  if (requerido) return requerido;

  const fecha = new Date(valor);
  const hoy = new Date();

  if (isNaN(fecha.getTime())) {
    return 'Introduce una fecha válida';
  }

  if (fecha > hoy) {
    return 'La fecha de nacimiento no puede ser futura';
  }

  const edad = hoy.getFullYear() - fecha.getFullYear();
  const mes = hoy.getMonth() - fecha.getMonth();
  const edadAjustada = mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate()) ? edad - 1 : edad;

  if (edadAjustada < EDAD_MINIMA) {
    return `Debes tener al menos ${EDAD_MINIMA} años`;
  }

  return null;
}

export function validarTelefono(valor) {
  if (!valor || valor.trim() === '') {
    return null;
  }

  const telefonoRegex = /^\+?[0-9\s\-()]{7,}$/;
  if (!telefonoRegex.test(valor.trim())) {
    return 'Introduce un número de teléfono válido';
  }
  return null;
}

export function validarLongitudMensaje(valor, min, max) {
  const requerido = validarRequerido(valor);
  if (requerido) return requerido;

  const longitud = valor.trim().length;

  if (longitud < min) {
    return `El mensaje debe tener al menos ${min} caracteres`;
  }
  if (longitud > max) {
    return `El mensaje no puede superar los ${max} caracteres`;
  }
  return null;
}

export function validarCheckbox(valor) {
  return validarRequerido(valor);
}
