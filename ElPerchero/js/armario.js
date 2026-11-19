import { obtenerTodasLasPrendas } from './datos.js';
import { abrirModalDetalle } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('listado-armario');
  const prendas = obtenerTodasLasPrendas();

  contenedor.innerHTML = prendas.map(p => `
    <article class="prenda-card" data-id="${p.id}">
      <button class="prenda-enlace" data-id="${p.id}">
        <img src="${p.imagen}" alt="${p.nombre}" class="prenda-imagen" loading="lazy">
        <h3>${p.nombre}</h3>
      </button>
    </article>
  `).join('');

  contenedor.querySelectorAll('.prenda-enlace').forEach(btn => {
    btn.onclick = () => {
      const p = prendas.find(x => x.id === Number(btn.dataset.id));
      if (p) abrirModalDetalle(p);
    };
  });
});