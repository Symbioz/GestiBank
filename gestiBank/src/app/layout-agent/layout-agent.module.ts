import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutAgentRoutingModule } from './layout-agent-routing.module';
import { LayoutAgentComponent } from './layout-agent.component';



@NgModule({
  	imports: [CommonModule, LayoutAgentRoutingModule],
  	declarations: [LayoutAgentComponent]
})
export class LayoutAgentModule { }
