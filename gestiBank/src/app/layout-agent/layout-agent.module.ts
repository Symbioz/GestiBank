import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DetailClientModalComponent } from './clients/detail-client-modal/detail-client-modal.component';
=======


>>>>>>> master
import { LayoutAgentRoutingModule } from './layout-agent-routing.module';
import { LayoutAgentComponent } from './layout-agent.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
<<<<<<< HEAD
import { ListeClientsComponent } from './clients/liste-clients/liste-clients.component';
import { DashboardAgentComponent } from './dashboard-agent/dashboard-agent.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  	imports: [
    	CommonModule, 
    	LayoutAgentRoutingModule,
      FormsModule,
      TranslateModule,
      ReactiveFormsModule,
      NgbDropdownModule.forRoot(),
      //IMPORTANT POUR LE MODAL :
      NgbModule.forRoot(),],

  	declarations: [
  		LayoutAgentComponent,
  	 	HeaderComponent,
  	  SidebarComponent,
      DashboardAgentComponent]
=======
import { ModalComponent } from './components/modal/modal.component';




@NgModule({
  	imports: [CommonModule, LayoutAgentRoutingModule,TranslateModule,
        NgbDropdownModule.forRoot()],
  	declarations: [LayoutAgentComponent, HeaderComponent, SidebarComponent, ModalComponent]
>>>>>>> master
})
export class LayoutAgentModule { }