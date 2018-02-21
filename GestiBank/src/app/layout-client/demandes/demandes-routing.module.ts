import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandesComponent } from './demandes.component';

const routes: Routes = [
    {
        path: '', component: DemandesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandesRoutingModule { }
