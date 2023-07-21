import { PresupuestoService } from 'src/app/services/presupuesto.service';
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

constructor(private _presupuestoService:PresupuestoService){
  this.nombreGasto='';
  this.cantidad = 0;
  this.formularioIncorrecto = false
  this.textIncorrecto ='Nombre o gasto cantidad incorrecta'
}
agregarGasto(){


if(this.cantidad > this._presupuestoService.restante){
  this.formularioIncorrecto = true;
  this.textIncorrecto= 'Cantidad ingresada es mayor al restante';
}

  if(this.nombreGasto === '' || this.cantidad <= 0){
    this.formularioIncorrecto = true
  }else{
    this.formularioIncorrecto = false
    this.nombreGasto = ''
    this.cantidad = 0
  }
}
}

