import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Timer2Component } from "./timer2/timer2.component"
import { TimerComponent } from './timer/timer.component';
import { LoreComponent } from './lore/lore.component';


const routes: Routes = [
  { path: '', component: TimerComponent },
  { path: 'recess', component: Timer2Component },
  { path: 'details', component: LoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// este modulo se puede crear con "ng generate module app-routing --flat --module=app" en consola
// genera app routing module configurado y solo faltaria agregarle las rutas especificas a los componenstes visibles solo en rutas especificas   