import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardAgentRoutingModule } from './dashboard-agent-routing.module';
import { DashboardAgentComponent } from './dashboard-agent.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardAgentRoutingModule
  ],
  declarations: [DashboardAgentComponent]
})
export class DashboardAgentModule { }
