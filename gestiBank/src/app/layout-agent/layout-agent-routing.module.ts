import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutAgentComponent } from './layout-agent.component';

const routes: Routes = [
	{
		path: '',
        component: LayoutAgentComponent,
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
export class LayoutAgentRoutingModule { }
