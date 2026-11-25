import { obtenerTodos, borrar } from './almacen.js';

const contenedor = document.getElementById('lista-usuarios');

function renderizarUsuarios() {
  const usuarios = obtenerTodos('usuarios');

  if (!usuarios || !usuarios.length) {
    contenedor.innerHTML = `
      <div class="estado-vacio" style="grid-column: 1 / -1;">
        <p>No hay usuarios registrados.</p>
      </div>`;
    return;
  }

  contenedor.innerHTML = `
    <table class="tabla-usuarios">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Fecha de nacimiento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${usuarios.map(u => `
          <tr data-id="${u.id}">
            <td>${u.usuario || 'Sin nombre'}</td>
            <td>${u.correo || 'Sin correo'}</td>
            <td>${u.fechaNacimiento || '-'}</td>
            <td>
              <button class="btn btn-secundaria btn-editar" data-id="${u.id}">Editar</button>
              <button class="btn btn-secundaria btn-borrar" data-id="${u.id}">Borrar</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>`;
}

function manejarAcciones(e) {
  const btnEditar = e.target.closest('.btn-editar');
  const btnBorrar = e.target.closest('.btn-borrar');

  if (btnEditar) {
    const id = btnEditar.dataset.id;
    window.location.href = `registro.html?id=${id}`;
  }

  if (btnBorrar) {
    const id = btnBorrar.dataset.id;
    if (confirm('¿Estás seguro de que quieres borrar este usuario?')) {
      borrar('usuarios', id);
      renderizarUsuarios();
    }
  }
}

contenedor.addEventListener('click', manejarAcciones);

renderizarUsuarios();
