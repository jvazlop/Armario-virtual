# Órbita 2: sistema visual de El Perchero

## Enlaces

| Qué | Enlace |
|---|---|
| Archivo de Figma (versión "Entrega Órbita 2") |https://www.figma.com/design/p5Lmh3AxWE67HLhqqP1ANf/Interfaz-web-Armario-virtual?node-id=177-508 |
| Prototipo (enlace que empieza por `figma.com/proto/`) | https://www.figma.com/proto/p5Lmh3AxWE67HLhqqP1ANf/Interfaz-web-Armario-virtual?node-id=268-216&t=2EMxbWzG7wuUUJt6-0&scaling=contain&content-scaling=fixed&page-id=257%3A1872 |
| Proyecto de Google Stitch (solo si lo has usado) |no use stitch|

## Dónde está cada cosa en Figma

| Entregable | Página y sección del archivo |
|---|---|
| Inventario de decisiones |https://www.figma.com/design/p5Lmh3AxWE67HLhqqP1ANf/Interfaz-web-Armario-virtual?node-id=177-508 |
| Wireframes rediseñados con sus notas | https://www.figma.com/design/p5Lmh3AxWE67HLhqqP1ANf/Interfaz-web-Armario-virtual?node-id=196-10 |
| Componentes |https://www.figma.com/design/p5Lmh3AxWE67HLhqqP1ANf/Interfaz-web-Armario-virtual?node-id=179-819|
| Mockups del happy path |https://www.figma.com/design/p5Lmh3AxWE67HLhqqP1ANf/Interfaz-web-Armario-virtual?node-id=257-1872|
| Pantalla principal en el segundo ancho |https://www.figma.com/design/p5Lmh3AxWE67HLhqqP1ANf/Interfaz-web-Armario-virtual?node-id=257-1872 h|
| Pantallas en modo oscuro |https://www.figma.com/design/p5Lmh3AxWE67HLhqqP1ANf/Interfaz-web-Armario-virtual?node-id=257-1872|
| Guía de estilo |https://www.figma.com/design/p5Lmh3AxWE67HLhqqP1ANf/Interfaz-web-Armario-virtual?node-id=243-1083|

## Lista de comprobación de Figma

- [x] Variables en dos colecciones (primitivos y semánticos), con alias, modos claro y oscuro, ámbito, descripción y sintaxis de código.
- [x] Estilos de texto, efecto y retícula vinculados a las variables.
- [x] Componentes con Auto layout, variables, propiedades y variantes de estado.
- [x] Mockups construidos enteros con Auto layout y espacios sacados de variables.
- [x] Pantalla principal en un segundo ancho, con los mismos componentes.
- [x] Modo oscuro aplicado con el selector de modo.
- [x] Prototipo que recorre el happy path completo.
- [x] Prueba 1 superada: al cambiar `color/primary`, cambian todas las pantallas a la vez.
- [x] Prueba 2 superada: con todos los mockups en modo oscuro, nada desaparece contra el fondo.

## Resumen de decisiones

### Rediseño de los wireframes
En general cambié el diseño de casi todas las pantallas, porque estuve preguntando por feedback a amigos por discord y muchos me dijeron que era muy básico y que podia hacerlo mejor, entonces opte por un diseño algo mas elegante, conservando mi lado informal que esta mas orientado a los colores.

Yo creo que los cambios mas importantes fueron el crear cuenta y iniciar sesión, dado que cuando lo hice en su momento lo que me gustaba esque fuera básico para mas rapidez para el usuario, pero con la mejora actual queda mucho mejor y ademas es mas visual para el usuario

Pantallas cambiadas y el que de cada una:

- Movil
    - Bienvenida:
      - Se cambio el icono vacio por el icono de la app para verlo mejor representado
      - Se ajustaron tamaños de letra para mejor accesibilidad
      - Se redució el tamaño de botones para que sea mas minimalista
    - Iniciar sesión:
      - Se hizo la interfaz mas visual
      - Se ajustaron los tamaños de letra
      - Se redució el tamaño de los botones
    - Crear Cuenta:
      - Se hizo la interfaz mas visual
      - Se ajustaron tamaños de letra
      - Se redució tamaño de los botones
    - Inicio:
      - Se amplió el tamaño de las tarjetas para mejor accesibilidad
    - Mi armario:
      - Se ajusto el tamaño de las tarjetas haciendolas mas compactas para una tarjeta de movil ademas de incluir el nombre/tipo de prenda que es
    - Añadir prenda:
      - Se cambió los tamaños de letra
    - Detalle de prenda:
      - Se cambió los tamaños de letra
    - Mi Perfil:
      - Se cambió algunos tamaño de letra
      - Se cambiaron algunos iconos para que tengan sincronía con otros
    - Prendas favoritas:
      - Se ajusto el tamaño de las tarjetas haciendolas mas compactas para una tarjeta de movil ademas de incluir el nombre/tipo de prenda que es
    - Chatbot
      - Se ajusto el tamaño de letra
  - Desktop
    - Bienvenida:
      - Se cambio el icono vacio por el icono de la app para verlo mejor representado
      - Se ajustaron tamaños de letra para mejor accesibilidad
    - Iniciar sesión:
      - Se hizo la interfaz mas visual
      - Se ajustaron los tamaños de letra
      - Se redució el tamaño de los botones
    - Crear Cuenta:
      - Se hizo la interfaz mas visual
      - Se ajustaron tamaños de letra
      - Se redució tamaño de los botones
    - Inicio:
      - Se mejoró el estilo de las tarjetas
    - Mi armario:
     - Se ajusto el tamaño de las tarjetas haciendolas que den mas información y se ajusten mejor a la web
    - Añadir prenda:
      - Se cambió los tamaños de letra
    - Detalle de prenda:
      - Se cambió los tamaños de letra
    - Mi Perfil:
      - Se cambió algunos tamaño de letrah
      - Se cambiaron algunos iconos para que tengan sincronía con otros
    - Prendas favoritas:
      - Se ajusto el tamaño de las tarjetas haciendolas que den mas información y se ajusten mejor a la web
    - Chatbot
      - Se ajusto el tamaño de letra
      - Se hizo un diseño de chat mas definido

### Color

La elección de la paleta cromática se basa en la temática urbana japonesa, que encaja con la identidad de mi proyecto. Al combinar esta propuesta visual con la estilografía clásica de la tipografía, se logra un entorno equilibrado que transmite modernidad y elegancia, a la vez que incorpora un sutil toque informal. El resultado es una interfaz accesible, atractiva y sumamente cómoda para cualquier usuario durante su navegación

1. Color Principal y Secundario 
   1. Color Principal (color-primary):
    - Modo Light: purple-700 (#5B35B5)   
    - Modo Dark: purple-300 (#B69AFF)  
        - Por qué se eligió: La gama de morados se utiliza como la identidad principal de la interfaz para aportar personalidad. Se asigna un tono más oscuro (purple-700) en el modo claro para garantizar la suficiente legibilidad y contraste sobre fondos claros, y un tonoclaro (purple-300) en el modo oscuro para que destaque sin deslumbrar sobre fondos oscuros.
    
    1. Color Secundario / Acento (color-accent):
        - Modo Light y Dark: pink-500 (#FF4FA3)
          - Por qué se eligió: El rosa actúa como un color de acento (color-accent) para llamar la atención sobre elementos específicos o detalles interactivos que necesiten diferenciarse del color principal morado.

2. Pareja de Texto y Fondo con el Contraste más Bajo
   
   - Modo Light:
      - Pareja: Texto secundario (color-text-secondary: neutral-600 o #514B61) sobre Superficie secundaria (color-surface-secondary: neutral-150 / #F0EDF7)
      - Valor: Dado que combina un gris/morado medio de texto (neutral-600) con un fondo gris/morado muy claro (neutral-150), esta combinación ofrece la menor diferencia lumínica del sistema para mantener el texto secundario legible en superficies secundarias.
   - Modo Dark:
      - Pareja: Texto secundario (color-text-secondary: neutral-200 o #E8E5EF) sobre Superficie (color-surface: neutral-900 o #1C1B24) o Superficie secundaria (color-surface-secondary: neutral-800 o #292733).

      - Valor: Al utilizar neutral-200 (un tono claro pero no blanco puro como neutral-50) sobre los fondos oscuros profundos de las superficies, se reduce ligeramente el contraste general respecto al texto primario para establecer una jerarquía visual clara y menos pesada para la lectura secundaria.
  
### Tipografía

1. Tipografía Primaria (primary):
   1. Familia: Jacques Francois   
        - Por qué se eligió: Jacques Francois es una tipografía con una fuerte presencia clásica y formal (caracterizada por sus contrastes marcados en los trazos de estilo serif). Se utiliza como fuente principal para aportar elegancia, distinción y una jerarquía visual sólida en los títulos o elementos principales de la interfaz.
2. Tipografía Secundaria (secondary):
   1. Familia: Itim
      - Por qué se eligió: Itim es una tipografía de estilo cursivo/casual relajada (de tipo sans-serif redondeada). Se selecciona como fuente secundaria para contraponerse a la rigidez y formalidad de la fuente primaria, ofreciendo un toque más cercano, legible y dinámico para textos de apoyo.
  
Los pesos estan en la guía de estilo nada mas porque no conseguí aplicarlo en variables.


### Espaciado y retícula

Base de la escala: 4 píxeles. Esto se debe a que el sistema comienza con un valor mínimo (space-1) de 4 px y los siguientes incrementos siguen múltiplos de 4 (8, 12, 16, 20, 24, etc.).

Margen y Medianil:Al estar construidos sobre esta escala base de 4 píxeles, los márgenes laterales y los medianiles utilizo valores estándar de la misma tabla, comúnmente 16 píxeles (space-4) o 24 píxeles (space-6) para asegurar la alineación de los componentes.

Columnas: Al estar en movil usoo 4 columnas con margen de 16px

### Componentes
Lista de componentes con sus variantes de estado.

Los componentes que tienen variantes de estado son estos:

- Boton:
    - Variante 1: forma base
    - Variante 2: Hover
    - Variante 3: Pressed

- Boton login Apple :
    - Variante 1: forma base
    - Variante 2: Hover
    - Variante 3: Pressed
- Boton login Google :
    - Variante 1: forma base
    - Variante 2: Hover
    - Variante 3: Pressed
- Boton Iniciar Sesion:
    - Variante 1: forma base
    - Variante 2: Hover
    - Variante 3: Pressed
- Boton Registrarse:
    - Variante 1: forma base
    - Variante 2: Hover
    - Variante 3: Pressed

Despues tengo estos pero no tienen variantes asociadas.Solo que catálogo de prendas y colección de prendas favoritas estan compuestas de tarjeta mockup fav y prendas.

- Formulario de inicio de sesión
- Panel de perfil
- Catálogo de prendas
- Colección de prendas favoritas
- ChatPC
- Chat
- Head prelogin
- Vector   
- Footer prelogin   
- Tarjeta mockup fav   
- Tarjeta mockup prendas   
- Menu lateral   
- Footer   
- Head   
- Colección de tarjetas de categorías de prendas
- Tarjeta mockup   
   

### Responsive y modo oscuro
Qué tuviste que ajustar al pasar la pantalla principal al segundo ancho, y qué corregiste en tus variables al pasar los mockups a modo oscuro.

Para el segundo ancho tuve que ajustar que el contenido se ajustara al ancho de la pantalla y se alargase, previamente tiene que estar bien configurado los componentes de dentro de esta para que no se bugueen.

Ciertamente no tuve que corregir mucho, habia veces que se me bugueaba el default, o se me olvidaba colocar el color background pero nada mas complicado de eso.

## Uso de IA
No pude usar stitch porque no me dejaba sencillamente, decia que no tenia los permisos para ello ni con mi cuenta personal de gmail. 

Use la IA de figma para la creacion de imagen y el renombramientos de los frames generados por el auto-layout.

## Lo que ha quedado pendiente

No se como aplicar loos pesos, borre las variables que supuestamente deberian representarlo porque no funcionaba ni poniendole el mismo nombre ni nada que era la solucion que me daban geminis y gpt para colocarlo.
