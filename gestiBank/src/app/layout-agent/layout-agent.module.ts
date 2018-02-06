import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { LayoutAgentRoutingModule } from './layout-agent-routing.module';
import { LayoutAgentComponent } from './layout-agent.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalComponent } from './components/modal/modal.component';
import { NotificationsComponent } from './components/notifications/notifications.component';




@NgModule({
  	imports: [CommonModule, LayoutAgentRoutingModule,TranslateModule,FormsModule,
        NgbDropdownModule.forRoot(),ReactiveFormsModule],
  	declarations: [LayoutAgentComponent, HeaderComponent, SidebarComponent, ModalComponent,  NotificationsComponent]
})
export class LayoutAgentModule { }
