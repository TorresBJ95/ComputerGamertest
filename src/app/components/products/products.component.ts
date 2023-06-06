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

  constructor(private storeService: StoreService, private productService: ProductsService){
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void{
    this.productService.getAllProducts()
    .subscribe(data => {
      this.products = data;
      
    })

  }
  
  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  
    
    
}
