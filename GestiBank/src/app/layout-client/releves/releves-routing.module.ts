import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelevesComponent } from './releves.component';

const routes: Routes = [
    {
        path: '', component: RelevesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelevesRoutingModule { }
