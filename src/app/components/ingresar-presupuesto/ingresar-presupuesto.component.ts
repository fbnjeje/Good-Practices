import { Component } from '@angular/core';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.scss']
})
export class IngresarPresupuestoComponent {
  cantidad:number;
  cantidadIncorrecta:boolean;


  constructor(){
    this.cantidad = 0
    this.cantidadIncorrecta = false
  }
}


