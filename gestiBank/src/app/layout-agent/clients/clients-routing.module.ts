import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';

const routes: Routes = [
 { path: '', component: ListeClientsComponent }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
