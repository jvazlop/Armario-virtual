import { obtenerCategoriaPorId } from './datos.js';

export function crearTarjetaPrenda(prenda) {
  const categoria = obtenerCategoriaPorId(prenda.categoriaId);
  const catNombre = categoria?.nombre ?? 'Sin categoría';

  return `
    <article class="prenda-card" data-id="${prenda.id}">
      <a href="prendaespecifica.html?id=${prenda.id}" class="prenda-enlace">
        <div class="prenda-imagen-contenedor">
          <img src="${prenda.imagen}" alt="${prenda.nombre}" class="prenda-imagen" loading="lazy">
          ${prenda.favorita ? '<span class="prenda-favorito-badge" aria-label="Favorita">★</span>' : ''}
        </div>
        <div class="prenda-info">
          <h3 class="prenda-nombre">${prenda.nombre}</h3>
          <p class="prenda-categoria">${categoria.icono} ${catNombre}</p>
          <p class="prenda-detalles">${prenda.color} • Talla ${prenda.talla}</p>
        </div>
      </a>
    </article>
  `;
}

export function renderizarListadoPrendas(contenedor, prendas, mensajeVacio = 'No hay prendas para mostrar') {
  if (!contenedor) return;
  if (!prendas?.length) {
    contenedor.innerHTML = `
      <div class="estado-vacio" style="grid-column: 1 / -1;">
        <svg class="icon icon-vacio" aria-hidden="true"><use href="#icon-wardrobe"></use></svg>
        <p>${mensajeVacio}</p>
      </div>`;
    return;
  }
  contenedor.innerHTML = prendas.map(crearTarjetaPrenda).join('');
}

export function crearDetallePrenda(prenda) {
  const categoria = obtenerCategoriaPorId(prenda.categoriaId);
  const catNombre = categoria?.nombre ?? 'Sin categoría';

  return `
    <article class="detalle-prenda">
      <div class="detalle-imagen-contenedor">
        <img src="${prenda.imagen}" alt="${prenda.nombre}" class="detalle-imagen">
        ${prenda.favorita ? '<span class="detalle-favorito-badge" aria-label="Favorita">★</span>' : ''}
      </div>
      <div class="detalle-info">
        <header class="detalle-cabecera">
          <h2 class="detalle-nombre">${prenda.nombre}</h2>
          <span class="detalle-categoria">${categoria.icono} ${catNombre}</span>
        </header>
        <dl class="detalle-propiedades">
          <div class="propiedad"><dt>Color</dt><dd>${prenda.color}</dd></div>
          <div class="propiedad"><dt>Talla</dt><dd>${prenda.talla}</dd></div>
          <div class="propiedad"><dt>Marca</dt><dd>${prenda.marca}</dd></div>
          <div class="propiedad"><dt>Temporada</dt><dd>${prenda.temporada}</dd></div>
          <div class="propiedad"><dt>Favorita</dt><dd>${prenda.favorita ? 'Sí ★' : 'No'}</dd></div>
        </dl>
        <p class="detalle-descripcion">${prenda.descripcion}</p>
        <div class="detalle-acciones">
          <a href="armario.html" class="btn btn-secundaria">
            <svg class="icon" aria-hidden="true"><use href="#icon-arrow-left"></use></svg> Volver al armario
          </a>
          <button class="btn btn-primaria" data-accion="toggle-favorito" data-id="${prenda.id}">
            ${prenda.favorita
    ? '<svg class="icon" aria-hidden="true"><use href="#icon-heart-filled"></use></svg> Quitar de favoritos'
    : '<svg class="icon" aria-hidden="true"><use href="#icon-heart"></use></svg> Añadir a favoritos'}
          </button>
        </div>
      </div>
    </article>
  `;
}

export function renderizarDetallePrenda(contenedor, prenda) {
  if (!contenedor || !prenda) return;
  contenedor.innerHTML = crearDetallePrenda(prenda);
}

export function renderizarCargando(contenedor) {
  if (!contenedor) return;
  contenedor.innerHTML = `
    <div class="estado-cargando" style="grid-column: 1 / -1;">
      <div class="spinner" aria-label="Cargando..."></div>
      <p>Cargando...</p>
    </div>`;
}

export function renderizarError(contenedor, mensaje) {
  if (!contenedor) return;
  contenedor.innerHTML = `
    <div class="estado-error" style="grid-column: 1 / -1;">
      <svg class="icon icon-error" aria-hidden="true"><use href="#icon-alert"></use></svg>
      <p>${mensaje}</p>
      <a href="armario.html" class="btn btn-primaria">Volver al armario</a>
    </div>`;
}

export function actualizarTitulo(titulo) {
  document.title = `ElPerchero - ${titulo}`;
}

export function marcarNavActivo(href) {
  document.querySelectorAll('.menu a').forEach(a => {
    a.removeAttribute('aria-current');
    if (a.getAttribute('href') === href) a.setAttribute('aria-current', 'page');
  });
}

export function obtenerIdDesdeURL() {
  return new URLSearchParams(window.location.search).get('id');
}

export function abrirModalDetalle(prenda) {
  const categoria = obtenerCategoriaPorId(prenda.categoriaId);
  const catNombre = categoria?.nombre ?? 'Sin categoría';

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'modal-titulo');

  overlay.innerHTML = `
    <div class="modal-contenedor">
      <header class="modal-cabecera">
        <h2 id="modal-titulo" class="modal-titulo">${prenda.nombre}</h2>
        <button class="modal-cerrar" aria-label="Cerrar detalle">
          <svg class="icon" aria-hidden="true"><use href="#icon-close"></use></svg>
        </button>
      </header>
      <div class="modal-cuerpo">
        <div class="modal-imagen-contenedor">
          <img src="${prenda.imagen}" alt="${prenda.nombre}" class="modal-imagen">
          ${prenda.favorita ? '<span class="modal-favorito-badge" aria-label="Favorita">★</span>' : ''}
        </div>
        <div class="modal-info">
          <span class="modal-categoria">${categoria.icono} ${catNombre}</span>
          <dl class="modal-propiedades">
            <div class="propiedad"><dt>Color</dt><dd>${prenda.color}</dd></div>
            <div class="propiedad"><dt>Talla</dt><dd>${prenda.talla}</dd></div>
            <div class="propiedad"><dt>Marca</dt><dd>${prenda.marca}</dd></div>
            <div class="propiedad"><dt>Temporada</dt><dd>${prenda.temporada}</dd></div>
            <div class="propiedad"><dt>Favorita</dt><dd>${prenda.favorita ? 'Sí ★' : 'No'}</dd></div>
          </dl>
          <p class="modal-descripcion">${prenda.descripcion}</p>
          <div class="modal-acciones">
            <button class="btn btn-secundaria modal-cerrar-btn">Cerrar</button>
            <button class="btn btn-primaria" data-accion="toggle-favorito" data-id="${prenda.id}">
              ${prenda.favorita
    ? '<svg class="icon" aria-hidden="true"><use href="#icon-heart-filled"></use></svg> Quitar de favoritos'
    : '<svg class="icon" aria-hidden="true"><use href="#icon-heart"></use></svg> Añadir a favoritos'}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  const focusables = overlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  first?.focus();

  const onTab = e => {
    if (e.key !== 'Tab') return;
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
  };
  const onEsc = e => { if (e.key === 'Escape') cerrarModal(overlay); };

  overlay.addEventListener('keydown', onTab);
  overlay.addEventListener('keydown', onEsc);
  overlay.addEventListener('click', e => { if (e.target === overlay) cerrarModal(overlay); });
  overlay.querySelectorAll('.modal-cerrar, .modal-cerrar-btn').forEach(b => b.addEventListener('click', () => cerrarModal(overlay)));

  overlay._cleanup = () => {
    overlay.removeEventListener('keydown', onTab);
    overlay.removeEventListener('keydown', onEsc);
  };

  overlay.style.display = 'flex';
  return overlay;
}

export function cerrarModal(modal) {
  if (!modal || !modal.classList.contains('modal-overlay')) return;
  modal._cleanup?.();
  modal.remove();
  document.body.style.overflow = '';
}

export function cerrarTodosModales() {
  document.querySelectorAll('.modal-overlay').forEach(cerrarModal);
}