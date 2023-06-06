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

  addProduct(product: Product) {
    this.myoShoppingCart.push(product);
    this.myCart.next(this.myoShoppingCart);
  }

  getShoppingCart(){
    return this.myoShoppingCart;
  }
  getTotal() {
    return this.myoShoppingCart.reduce((sum, item) => sum + item.precio, 0);

  }
}
