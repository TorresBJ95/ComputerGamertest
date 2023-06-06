import { Component, OnInit} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [MatGridListModule, ProductComponent, CommonModule],
})
export class ProductsComponent implements OnInit{
  
  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];

  //pre: recibe los servicios de storeService y productService y los almacena en atributos propios
  //post: almacena en myShoppingCart lo retornado en el metodo de storeService
  constructor(private storeService: StoreService, private productService: ProductsService){
    this.myShoppingCart = this.storeService.getShoppingCart();
  }
  //pre:
  // post: llama al metodo en productService y utiliza un observable
  ngOnInit(): void{
    this.productService.getAllProducts()
    .subscribe(data => {
      this.products = data;
      
    })

  }
  //pre: recibe el tipo de dato product
  //post: llama al metodo de storeService, y en el atributo total almacena lo retornado en el metodo getTotal
  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  
    
    
}
