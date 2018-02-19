import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutAgentComponent } from './layout-agent.component';
//import {DashboardAgentComponent} from './dashboard-agent/dahsboard-agent.component';
import { DetailClientModalComponent } from './clients/detail-client-modal/detail-client-modal.component';
import { ListeClientsComponent } from './clients/liste-clients/liste-clients.component';

const routes: Routes = [
<<<<<<< HEAD
	 		{ path: '', component: LayoutAgentComponent, 	
	 			children: [
	 			//	{ path: 'dashboard', component: DashboardAgentComponent },
	            { path: 'clients',   loadChildren: './clients/clients.module#ClientsModule' },
	            { path: 'demandesAgent',   loadChildren: './demandes/demandes-agent.module#DemandesAgentModule' }
           		]
           	}
            
     
=======
     {
            path: '',
        component: LayoutAgentComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard-agent/dashboard-agent.module#DashboardAgentModule' },
            { path: 'clients', loadChildren: './clients/clients.module#ClientsModule' },
            { path: 'demande-en-cours', loadChildren: './demande-en-cours/demande-en-cours.module#DemandeEnCoursModule' }
        ]
    }
>>>>>>> master
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutAgentRoutingModule { }