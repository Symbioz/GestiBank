import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutAdminComponent } from './layout-admin.component';

const routes: Routes = [
	{
		path: '',
        component: LayoutAdminComponent,
        children: [
            //{ path: '', redirectTo: 'dashboardAdmin' },
            { path: 'dashboardAdmin', loadChildren: './dashboard-admin/dashboard-admin.module#DashboardAdminModule' },
            { path: 'gestionAgents', loadChildren: './page/gestion-agents/gestion-agents.module#GestionAgentsModule' },
            { path: 'gestionNouveauClients', loadChildren: './page/gestion-nouveau-clients/gestion-nouveau-clients.module#GestionNouveauClientsModule' },
            { path: 'gestionAgents/infoAgents', loadChildren: './page/info-agents/info-agents.module#InfoAgentsModule' },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutAdminRoutingModule { }
