import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  //pre: recibe el modulo de HttpCLient en el constructor y lo inicializa
  //post: ...
  constructor(private http: HttpClient) { }

  //pre: ...
  // post: retorna el archivo de productos .json usando la interface Product[] para verificar tipo de datos.
  getAllProducts() {
    return this.http.get<Product[]>('https://static.compragamer.com/test/productos.json');

  }
}
