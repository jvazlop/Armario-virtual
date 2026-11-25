const prefijo = 'elperchero_';

function clave(coleccion) {
  return `${prefijo}${coleccion}`;
}

function obtenerTodos(coleccion) {
  const datos = localStorage.getItem(clave(coleccion));
  return datos ? JSON.parse(datos) : [];
}

function obtenerPorId(coleccion, id) {
  const todos = obtenerTodos(coleccion);
  return todos.find(item => item.id === id) || null;
}

function crear(coleccion, dato) {
  const todos = obtenerTodos(coleccion);
  const nuevoId = dato.id || Date.now().toString();
  const nuevo = { id: nuevoId, ...dato };
  todos.push(nuevo);
  localStorage.setItem(clave(coleccion), JSON.stringify(todos));
  return nuevo;
}

function actualizar(coleccion, id, dato) {
  const todos = obtenerTodos(coleccion);
  const index = todos.findIndex(item => item.id === id);
  if (index === -1) return null;
  const actualizado = { id, ...dato };
  todos[index] = actualizado;
  localStorage.setItem(clave(coleccion), JSON.stringify(todos));
  return actualizado;
}

function borrar(coleccion, id) {
  const todos = obtenerTodos(coleccion);
  const filtrados = todos.filter(item => item.id !== id);
  if (filtrados.length === todos.length) return false;
  localStorage.setItem(clave(coleccion), JSON.stringify(filtrados));
  return true;
}

export { obtenerTodos, obtenerPorId, crear, actualizar, borrar };
