/**
 * Datos de ejemplo para ElPerchero
 * Entidades: Prendas y Categorías
 * Imágenes: URLs directas de Unsplash (hotlinking permitido, licencia libre)
 */

// Categorías de prendas
export const categorias = [
  { id: 1, nombre: 'Camisetas', icono: '👕' },
  { id: 2, nombre: 'Pantalones', icono: '👖' },
  { id: 3, nombre: 'Chaquetas', icono: '🧥' },
  { id: 4, nombre: 'Vestidos', icono: '👗' },
  { id: 5, nombre: 'Calzado', icono: '👟' },
  { id: 6, nombre: 'Accesorios', icono: '🧣' }
];

// Prendas del armario (12 registros) - fotos reales de Unsplash
export const prendas = [
  {
    id: 1,
    nombre: 'Camiseta básica blanca',
    categoriaId: 1,
    color: 'Blanco',
    talla: 'M',
    marca: 'Uniqlo',
    temporada: 'Todas',
    favorita: true,
    imagen: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop',
    descripcion: 'Camiseta de algodón 100% orgánico, corte recto'
  },
  {
    id: 2,
    nombre: 'Jeans slim fit azul oscuro',
    categoriaId: 2,
    color: 'Azul marino',
    talla: '32',
    marca: 'Levi\'s',
    temporada: 'Otoño/Invierno',
    favorita: true,
    imagen: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop',
    descripcion: 'Jeans 511 slim fit, tela stretch cómoda'
  },
  {
    id: 3,
    nombre: 'Chaqueta cuero clásica',
    categoriaId: 3,
    color: 'Negro',
    talla: 'L',
    marca: 'Wrangler',
    temporada: 'Primavera/Otoño',
    favorita: false,
    imagen: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop',
    descripcion: 'Chaqueta vaquera tipo trucker, bolsillos frontales'
  },
  {
    id: 4,
    nombre: 'Vestido floral midi',
    categoriaId: 4,
    color: 'Rosa/Verde',
    talla: 'S',
    marca: 'Zara',
    temporada: 'Primavera/Verano',
    favorita: true,
    imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop',
    descripcion: 'Vestido midi con estampado floral, manga corta'
  },
  {
    id: 5,
    nombre: 'Zapatillas running rojas',
    categoriaId: 5,
    color: 'Rojo',
    talla: '42',
    marca: 'Nike',
    temporada: 'Todas',
    favorita: false,
    imagen: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop',
    descripcion: 'Zapatillas Air Max, amortiguación reactiva'
  },
  {
    id: 6,
    nombre: 'Bufanda de lana gris',
    categoriaId: 6,
    color: 'Gris perla',
    talla: 'Única',
    marca: 'H&M',
    temporada: 'Otoño/Invierno',
    favorita: false,
    imagen: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=300&h=400&fit=crop',
    descripcion: 'Bufanda suave de mezcla de lana y acrílico'
  },
  {
    id: 7,
    nombre: 'Sudadera gris con capucha',
    categoriaId: 1,
    color: 'Gris',
    talla: 'L',
    marca: 'Champion',
    temporada: 'Otoño/Invierno',
    favorita: true,
    imagen: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop',
    descripcion: 'Sudadera oversize, felpa interior, capucha ajustable'
  },
  {
    id: 8,
    nombre: 'Pantalón chino beige',
    categoriaId: 2,
    color: 'Beige',
    talla: '31',
    marca: 'Massimo Dutti',
    temporada: 'Primavera/Otoño',
    favorita: false,
    imagen: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop',
    descripcion: 'Chino slim fit, tela técnico anti-arrugas'
  },
  {
    id: 9,
    nombre: 'Cazadora bomber negra',
    categoriaId: 3,
    color: 'Negro',
    talla: 'M',
    marca: 'Alpha Industries',
    temporada: 'Otoño/Invierno',
    favorita: true,
    imagen: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop',
    descripcion: 'Bomber MA-1 auténtica, forro naranja'
  },
  {
    id: 10,
    nombre: 'Vestido rojo',
    categoriaId: 4,
    color: 'Rojo',
    talla: 'M',
    marca: 'Mango',
    temporada: 'Primavera/Verano',
    favorita: false,
    imagen: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=400&fit=crop',
    descripcion: 'Vestido midi fluido, escote en V, tirantes finos'
  },
  {
    id: 11,
    nombre: 'Botas chelsea marrones',
    categoriaId: 5,
    color: 'Marrón',
    talla: '41',
    marca: 'Dr. Martens',
    temporada: 'Otoño/Invierno',
    favorita: true,
    imagen: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=300&h=400&fit=crop',
    descripcion: 'Botas chelsea cuero, suela con aire'
  },
  {
    id: 12,
    nombre: 'Gorro de punto mostaza',
    categoriaId: 6,
    color: 'Mostaza',
    talla: 'Única',
    marca: 'Carhartt',
    temporada: 'Invierno',
    favorita: false,
    imagen: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=300&h=400&fit=crop',
    descripcion: 'Gorro acanalado, logo bordado'
  },
  {
    id: 13,
    nombre: 'Pantalón chino',
    categoriaId: 2,
    color: 'Marron',
    talla: '32',
    marca: 'Massimo',
    temporada: 'Otoño',
    favorita: false,
    imagen: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop',
    descripcion: 'Tela técnico anti-arrugas'
  }
];

// Funciones helper para trabajar con los datos
export function obtenerPrendaPorId(id) {
  return prendas.find(p => p.id === Number(id));
}

export function obtenerPrendasPorCategoria(categoriaId) {
  return prendas.filter(p => p.categoriaId === Number(categoriaId));
}

export function obtenerPrendasFavoritas() {
  return prendas.filter(p => p.favorita);
}

export function obtenerCategoriaPorId(id) {
  return categorias.find(c => c.id === Number(id));
}

export function obtenerTodasLasPrendas() {
  return [...prendas];
}

export function obtenerTodasLasCategorias() {
  return [...categorias];
}