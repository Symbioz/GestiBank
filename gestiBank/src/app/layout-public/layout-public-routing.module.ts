import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPublicComponent } from './layout-public.component';

const routes: Routes = [
	{
		path: '',
        component: LayoutPublicComponent
    }
];

@NgModule({
  	imports: [RouterModule.forChild(routes)],
  	exports: [RouterModule]
})
export class LayoutPublicRoutingModule { }
