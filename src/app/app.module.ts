import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// modulos
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// componentes creados
import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarGastoComponent } from './components/gastos/ingresar-gasto/ingresar-gasto.component';
import { ListasGastosComponent } from './components/gastos/listas-gastos/listas-gastos.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IngresarPresupuestoComponent,
    IngresarGastoComponent,
    ListasGastosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
