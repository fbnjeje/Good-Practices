import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent {


  constructor(private _presupuestoService:PresupuestoService){

  }

  ngOnInit(){
    console.log(this._presupuestoService.presupuesto);
  }
}
