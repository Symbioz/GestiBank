import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutClientComponent } from './layout-client.component';

const routes: Routes = [
    {
		    path: '',
        component: LayoutClientComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard-client/dashboard-client.module#DashboardClientModule' },
        ]
    }
];

@NgModule({
  	imports: [RouterModule.forChild(routes)],
  	exports: [RouterModule]
})
export class LayoutClientRoutingModule { }
