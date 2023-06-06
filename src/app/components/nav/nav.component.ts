import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule]
})
export class NavComponent implements OnInit {
  activeMenu = false;
  counter = 0;

  //pre: utiliza el servicio storeService y lo inicializa en variable
  //post:
  constructor(private storeServices: StoreService){

  }
  //pre:
  //post: utiliza el storeServices y un observable para ver los datos del ancho de array de products, almacenandolos en counter
  ngOnInit(): void{
    this.storeServices.myCart$.subscribe(products => {
      this.counter = products.length;

    })
  }
  //pre:
  //post: cambia el valor true a false y viceversa para activar y desactivar el Menutoggle
  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}
