import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent {
  
  constructor(private _presupuestoService:PresupuestoService,
    private router:Router){
    }
    presupuesto:number = this._presupuestoService.presupuesto

  ngOnInit(){
    if(this.presupuesto === 0){
      this.router.navigate(["/ingresarPresupuesto"])
    }
    console.log(this._presupuestoService.presupuesto);
  }
}
