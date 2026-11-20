# Armario-virtual

## Descripcion
Aplicacion de armario virtual para organizar prendas, crear combinaciones y aprovechar mejor la ropa que ya tienes.

## Backlog

| Prioridad | Funcionalidad | Descripcion |
|-----------|---------------|-------------|
| Alta | Listado de prendas | Grid con tarjetas (imagen, nombre, categoria) y modal detalle al click |
| Alta | Anadir prenda | Formulario: imagen, nombre, categoria, color, talla, marca, temporada, favorito; validacion y guardado en localStorage |
| Alta | Editar/Eliminar | Editar o borrar prendas desde el detalle con confirmacion |
| Alta | Favoritos | Toggle en tarjetas y modal; vista filtrada en Favoritos |
| Media | Filtro por categoria | Selector para filtrar grid por tipo de prenda |
| Media | Busqueda | Input que filtra por nombre, marca, color o descripcion |
| Media | localStorage | Guardar prendas, favoritos y estado entre sesiones |
| Baja | ChatBot outfits | IA que recomienda combinaciones segun ocasion/clima |
| Baja | Perfil usuario | Datos personales, configuracion, ayuda, logout |
| Baja | Modo SPA | Router hash/history, navegacion sin recarga, transiciones |

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