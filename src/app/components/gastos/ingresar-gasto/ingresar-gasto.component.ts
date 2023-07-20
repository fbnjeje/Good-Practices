import { Component } from '@angular/core';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.scss']
})
export class IngresarGastoComponent {
nombreGasto:string;
cantidad:number;
formularioIncorrecto:boolean;
textIncorrecto:string;

constructor(){
  this.nombreGasto='';
  this.cantidad = 0;
  this.formularioIncorrecto = false
  this.textIncorrecto ='Nombre o gasto cantidad incorrecta'
}
agregarGasto(){
  if(this.nombreGasto === '' || this.cantidad <= 0){
    this.formularioIncorrecto = true
  }else{
    this.formularioIncorrecto = false

  }
}
}

