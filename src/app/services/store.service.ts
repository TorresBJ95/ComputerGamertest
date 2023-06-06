import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myoShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() { }

  //  pre: recibe un tipo de dato product
  // post: envia al atributo myoShoppingCart los datos de "product"
  addProduct(product: Product) {
    this.myoShoppingCart.push(product);
    this.myCart.next(this.myoShoppingCart);
  }

  // pre:
  // post: retorna el valor del atributo myoShoppingCart
  getShoppingCart(){
    return this.myoShoppingCart;
  }

  // pre:
  // post: retorna el valor de myoShoppingCart contado el precio de sus items.
  getTotal() {
    return this.myoShoppingCart.reduce((sum, item) => sum + item.precio, 0);

  }
}
