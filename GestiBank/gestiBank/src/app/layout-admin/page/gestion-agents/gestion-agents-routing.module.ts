import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionAgentsComponent } from './gestion-agents.component';

const routes: Routes = [
  {
  	path: '',
    component: GestionAgentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionAgentsRoutingModule { }
