import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
  standalone: true,
  imports: [ProductComponent, CommonModule]
})
export class ImgComponent {
  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    
    
  }
  @Input() alt: string = '';


  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    this.loaded.emit(this.img);
  }

}
