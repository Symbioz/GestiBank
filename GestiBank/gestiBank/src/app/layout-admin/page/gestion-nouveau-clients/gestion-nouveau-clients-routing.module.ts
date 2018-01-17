import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionNouveauClientsComponent } from './gestion-nouveau-clients.component';
const routes: Routes = [
	{
	path: '',
    component: GestionNouveauClientsComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionNouveauClientsRoutingModule { }
