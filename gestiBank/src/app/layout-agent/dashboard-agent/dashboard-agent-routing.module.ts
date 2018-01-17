import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardAgentComponent} from './dashboard-agent.component';

const routes: Routes = [
	{
		path: '',
        component: DashboardAgentComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard-agent/dashboardAgent.module#DashboardAgentModule' }
           
        ]

   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAgentRoutingModule { }
