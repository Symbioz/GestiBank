import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutAdminComponent } from './layout-admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { HttpModule } from '@angular/http';

const routes: Routes = [
    {
        path: '',
        component: LayoutAdminComponent,
        children: [
            //{ path: '', redirectTo: 'dashboardAdmin' },
            //{ path: 'dashboardAdmin', loadChildren: './dashboard-admin/dashboard-admin.module#DashboardAdminModule' },
            { path: 'dashboardAdmin', component: DashboardAdminComponent},
     
            { path: 'gestionAgents', loadChildren: './page/gestion-agents/gestion-agents.module#GestionAgentsModule' },
            { path: 'gestionNouveauClients', loadChildren: './page/gestion-nouveau-clients/gestion-nouveau-clients.module#GestionNouveauClientsModule' },
            { path: 'gestionAgents/infoAgents', loadChildren: './page/info-agents/info-agents.module#InfoAgentsModule' },
            { path: 'gestionAgents/infoAgents/:id', loadChildren: './page/info-agents/info-agents.module#InfoAgentsModule' },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpModule],
  exports: [RouterModule]
})
export class LayoutAdminRoutingModule { }