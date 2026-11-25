# Armario-virtual

## Descripcion
Aplicacion de armario virtual para organizar prendas, crear combinaciones y aprovechar mejor la ropa que ya tienes. Básicamente es tu armario en el ordenador/móvil para no liarte con qué ponerte cada día.

## Backlog

| Prioridad | Funcionalidad | Descripcion | Estado |
|-----------|---------------|-------------|--------|
| Alta | Listado de prendas | Grid con tarjetas (imagen, nombre, categoria) y modal detalle al click | Terminada |
| Alta | Anadir prenda | Formulario: imagen, nombre, categoria, color, talla, marca, temporada, favorito; validacion y guardado en localStorage | Terminada |
| Alta | Editar/Eliminar | Editar o borrar prendas desde el detalle con confirmacion | Terminada |
| Alta | Favoritos | Toggle en tarjetas y modal; vista filtrada en Favoritos | Terminada |
| Media | Filtro por categoria | Selector para filtrar grid por tipo de prenda | Pendiente |
| Media | Busqueda | Input que filtra por nombre, marca, color o descripcion | Pendiente |
| Media | localStorage | Guardar prendas, favoritos y estado entre sesiones | Terminada |
| Baja | ChatBot outfits | IA que recomienda combinaciones segun ocasion/clima | Pendiente |
| Baja | Perfil usuario | Datos personales, configuracion, ayuda, logout | Terminada (Hito 2) |
| Baja | Modo SPA | Router hash/history, navegacion sin recarga, transiciones | Pendiente |

## Mapa de pantallas

| Vista | Ruta | Que muestra |
|-------|------|-------------|
| Inicio | index.html | Hero, stats, 4 accesos rapidos (Armario, Anadir, ChatBot, Favoritos) |
| Armario | armario.html | Grid de todas las prendas con imagen y nombre; click abre modal detalle |
| Detalle | prendaespecifica.html?id=X | Ficha completa: imagen, nombre, categoria, color, talla, marca, temporada, descripcion |
| Favoritos | favoritos.html | Grid filtrado solo prendas favoritas |
| Anadir | anadir-prenda.html | Formulario: imagen, nombre, categoria, color, talla, marca, temporada, favorito |
| ChatBot | chatbot.html | Chat con historial y barra de envio |
| Perfil | perfil.html | Nombre, email, enlaces: Favoritos, Configuracion, Ayuda, Logout |
| Login | login.html | Pantalla de entrada con correo y contraseña |
| Registro | registro.html | Registro de usuario con validaciones |
| Usuarios | usuarios.html | Listado de usuarios con edicion y borrado |
| Ayuda y Soporte | ayuda-soporte.html | Formulario de contacto y mensajes enviados |

---

## Hito 2 · Formularios

Vale, aquí va el resumen del Hito 2. Básicamente hemos montado dos formularios (registro y contacto) con sus validaciones hechas a mano en JavaScript, sin usar el `novalidate` del navegador para nada.

### Mapa de validacion

| Formulario | Campo | Regla | Mensaje de error |
|------------|-------|-------|------------------|
| Registro | Nombre de usuario | Requerido, minimo 3, maximo 30 caracteres | Este campo es obligatorio |
| Registro | Correo electronico | Requerido, formato valido (regex) | Introduce un correo electronico valido |
| Registro | Contrasena | Requerido, minimo 8 caracteres, una mayuscula y un numero | La contrasena debe tener al menos 8 caracteres / debe contener una mayuscula / debe contener un numero |
| Registro | Confirmar Contrasena | Requerido, debe coincidir con Contrasena | Las contrasenas no coinciden |
| Registro | Fecha de nacimiento | Requerido, no futura, edad minima 14 anos | La fecha de nacimiento no puede ser futura / Debes tener al menos 14 anos |
| Registro | Acepto terminos y condiciones | Checkbox marcado | Este campo es obligatorio |
| Registro | Aceptar recibir notificaciones | Opcional (checkbox) | — |
| Contacto | Nombre | Requerido, minimo 2, maximo 50 caracteres | Este campo es obligatorio |
| Contacto | Correo | Requerido, formato valido (regex) | Introduce un correo electronico valido |
| Contacto | Telefono | Opcional, si se rellena solo `+` y numeros | Introduce un numero de telefono valido |
| Contacto | Motivo | Requerido, seleccionar una opcion del desplegable | Selecciona un motivo |
| Contacto | Mensaje | Requerido, minimo 10, maximo 500 caracteres | El mensaje debe tener al menos 10 caracteres / no puede superar los 500 caracteres |

### Qué se ha hecho

- `almacen.js` con el CRUD basico sobre localStorage (`obtenerTodos`, `obtenerPorId`, `crear`, `actualizar`, `borrar`). Todo lo que se guarda pasa por aquí.
- `validacion.js` con funciones puras que devuelven el mensaje de error o `null` si todo bien.
- Formulario de registro con `novalidate`, validaciones al salir del campo (`blur`) y mientras escribes (`input`), mensajes con `aria-invalid` y `aria-describedby`, y nada de `alert()`.
- Vista «Usuarios» con listado, botones Editar y Borrar usando delegacion de eventos, y borrado con confirmacion previa.
- El mismo formulario sirve para crear y editar usuarios: al editar se rellena con los datos que ya tenías.
- La contrasena NO se guarda en claro
- Formulario de contacto con motivo (desplegable con 3 opciones), telefono opcional, contador de caracteres del mensaje y casilla de "Prefiero que me llaméis".
- Vista «Mensajes enviados» con listado y boton de borrar para cada uno.
- Cookie con nombre y correo del ultimo envio (caducidad de 30 dias) para rellenarlos automáticamente la próxima vez.
- Perfil actualizado con los datos del usuario que se registra.
- Los formularios convierten los tipos correctamente: checkbox a booleano, fecha a ISO, etc.
- Todo persiste al recargar la pagina gracias a localStorage.

### Qué falta

Diría y juraría que nada

### Qué ha costado más

- La validacion de que  el telefono sea obligatorio solo si marcas «Prefiero que me llaméis», sin liarse con las reglas del HTML nativo.
- Hacer que el mismo formulario sirva para crear y editar, manteniendo el estado de modo edicion y rellenando los campos bien.
- La cookie con fecha de caducidad y que se lean los datos al cargar la pagina para rellenar nombre y correo solos.
