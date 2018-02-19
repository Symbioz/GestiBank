import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DemandeEnCoursComponent} from './demande-en-cours.component';

const routes: Routes = [
	{
        path: '', component: DemandeEnCoursComponent
    }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeEnCoursRoutingModule { }
