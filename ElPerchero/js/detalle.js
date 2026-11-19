import { obtenerPrendaPorId } from './datos.js';
import {
  renderizarDetallePrenda,
  renderizarError,
  actualizarTitulo,
  obtenerIdDesdeURL
} from './ui.js';

const contenedor = document.getElementById('detalle-prenda');

function init() {
  const id = obtenerIdDesdeURL();

  if (!id) {
    renderizarError(contenedor, 'No se ha especificado ninguna prenda');
    return;
  }

  const prenda = obtenerPrendaPorId(id);

  if (!prenda) {
    renderizarError(contenedor, 'Prenda no encontrada');
    return;
  }

  actualizarTitulo(prenda.nombre);
  renderizarDetallePrenda(contenedor, prenda);
}

document.addEventListener('DOMContentLoaded', init);