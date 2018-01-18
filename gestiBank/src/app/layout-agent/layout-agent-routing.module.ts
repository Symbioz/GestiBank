import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutAgentComponent } from './layout-agent.component';

const routes: Routes = [
	 {
		    path: '',
        component: LayoutAgentComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard-agent/dashboard-agent.module#DashboardAgentModule' },
             { path: 'clients', loadChildren: './clients/clients.module#ClientsModule' }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutAgentRoutingModule { }
