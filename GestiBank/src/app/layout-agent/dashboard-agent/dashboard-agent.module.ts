import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardAgentRoutingModule } from './dashboard-agent-routing.module';
import { DashboardAgentComponent } from './dashboard-agent.component';

import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsComponent } from './notifications/notifications.component';
@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    DashboardAgentRoutingModule
  ],
  declarations: [DashboardAgentComponent, NotificationsComponent]
})
export class DashboardAgentModule { }
