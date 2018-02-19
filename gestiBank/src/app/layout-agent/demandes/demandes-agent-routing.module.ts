import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandeModalComponent } from './demande-modal/demande-modal.component';
import { ListDemandesComponent } from './list-demandes/list-demandes.component';

const routes: Routes = [
{ path: '', component: ListDemandesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandesAgentRoutingModule { }
