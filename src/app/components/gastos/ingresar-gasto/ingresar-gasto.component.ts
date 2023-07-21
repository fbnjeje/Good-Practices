import { PresupuestoService } from 'src/app/services/presupuesto.service';
import { Component } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

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
  return
}

  if(this.nombreGasto === '' || this.cantidad <= 0){
    this.formularioIncorrecto = true
  }else{
    //OBJETO
    const GASTO= {
      nombre: this.nombreGasto,
      cantidad:  this.cantidad
    } 
    //ENVIAMOS EL OBJETO A LOS SUSCRIPTORES VIA SUBJET
    this._presupuestoService.agrergarGasto(GASTO)

    //RESETEAMOS EL FORMULARIO
    this.formularioIncorrecto = false
    this.nombreGasto = ''
    this.cantidad = 0
  }





  }
}




