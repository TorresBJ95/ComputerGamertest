import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsComponent } from '../products/products.component';
import { ImgComponent } from '../img/img.component';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [ProductsComponent, ImgComponent, CommonModule, MatGridListModule, FormsModule]
  
})
export class ProductComponent implements OnChanges {
  
  
  
  
  linkDeProducto = 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_';
  @Input() product: Product = {
    destacado: 0,
    nombre: '',
    id_producto: 0,
    id_subcategoria: 0,
    precio: 0,
    imagenes: [{nombre: '',id_producto_imagen: 0,orden: 0}],
    vendible: 0,
    stock: 0,
    garantia: 0,
    iva: 0,
  };
  
  @Output() addedProduct = new EventEmitter<Product>();

  ngOnChanges(): void{
    this.product.imagenes[0].nombre = this.linkDeProducto + this.product.imagenes[0].nombre + '-med.jpg';
    

  }
  
  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

}
