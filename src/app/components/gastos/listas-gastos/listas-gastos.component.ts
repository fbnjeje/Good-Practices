import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listas-gastos',
  templateUrl: './listas-gastos.component.html',
  styleUrls: ['./listas-gastos.component.scss']
})
export class ListasGastosComponent implements OnInit,OnDestroy {

  subcription: Subscription;
  presupuesto:number;
  restante:number
  listGastos:any[] = []  ;

  constructor(private _presupuestpService:PresupuestoService){


    this.presupuesto = 0
    this.restante = 0 


    this.subcription  = this._presupuestpService.getGastos().subscribe(data => {
      this.restante = this.restante - data.cantidad
      this.listGastos.push(data)
    })
  }
  ngOnInit(): void {
    this.presupuesto = this._presupuestpService.presupuesto
    this.restante = this._presupuestpService.restante
  }




  ngOnDestroy(): void {
    this.subcription.unsubscribe
  }
}
