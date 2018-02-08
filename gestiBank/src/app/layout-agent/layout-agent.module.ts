import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {DetailClientModalComponent} from './clients/detail-client-modal/detail-client-modal.component';
import { LayoutAgentRoutingModule } from './layout-agent-routing.module';
import { LayoutAgentComponent } from './layout-agent.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListeClientsComponent } from './clients/liste-clients/liste-clients.component';
import { DashboardAgentComponent } from './dashboard-agent/dashboard-agent.component';



@NgModule({
  	imports: [
  	CommonModule, 
  	LayoutAgentRoutingModule,
    FormsModule,
    ReactiveFormsModule],
  	declarations: [
  		LayoutAgentComponent,
  	 	HeaderComponent,
  	  	SidebarComponent,
  	  	DetailClientModalComponent,
  	    DashboardAgentComponent],
  	declarations: [ ListeClientsComponent,DashboardAgentComponent,HeaderComponent, SidebarComponent ]
})
export class LayoutAgentModule { }
