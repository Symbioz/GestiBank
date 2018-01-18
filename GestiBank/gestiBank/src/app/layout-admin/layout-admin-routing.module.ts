import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutAdminComponent } from './layout-admin.component';

const routes: Routes = [
	{
		path: '',
        component: LayoutAdminComponent,
        children: [
            { path: '', redirectTo: 'dashboardAdmin' },
            { path: 'dashboardAdmin', loadChildren: './dashboard-admin/dashboard-admin.module#DashboardAdminModule' },
            { path: 'gestionAgents', loadChildren: './page/gestion-agents/gestion-agents.module#GestionAgentsModule' },
            { path: 'gestionAgents/creerAgents', loadChildren: './page/creer-agents/creer-agents.module#CreerAgentsModule' },
            { path: 'gestionNouveauClients', loadChildren: './page/gestion-nouveau-clients/gestion-nouveau-clients.module#GestionNouveauClientsModule' },
            { path: 'gestionAgents/editerAgents', loadChildren: './page/editer-agents/editer-agents.module#EditerAgentsModule' },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutAdminRoutingModule { }
