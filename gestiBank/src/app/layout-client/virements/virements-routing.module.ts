import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirementsComponent } from './virements.component';

const routes: Routes = [
    {
        path: '', component: VirementsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VirementsRoutingModule { }
