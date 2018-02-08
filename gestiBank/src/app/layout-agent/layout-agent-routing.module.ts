import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutAgentComponent } from './layout-agent.component';
//import {DashboardAgentComponent} from './dashboard-agent/dahsboard-agent.component';
import { DetailClientModalComponent } from './clients/detail-client-modal/detail-client-modal.component';
import { ListeClientsComponent } from './clients/liste-clients/liste-clients.component';

const routes: Routes = [
	 		{	path: '', component: LayoutAgentComponent},
        
            { path: '', redirectTo: 'client' },
  //          { path: 'dashboard', component: DashboardAgentComponent },
            { path: 'clients', component: ListeClientsComponent }
            
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutAgentRoutingModule { }