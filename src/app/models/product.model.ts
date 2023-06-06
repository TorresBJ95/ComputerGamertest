// interface de productos recibidos por API
export interface Product {
    destacado: number;
    nombre: string;
    id_producto: number;
    id_subcategoria: number;
    precio: number;
    imagenes: Imagen[];
    vendible: number;
    stock: number;
    garantia: number;
    iva: number;
  }
export interface Imagen {
    nombre: string;
    id_producto_imagen: number;
    orden: number;
}