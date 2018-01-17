import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutAgentRoutingModule } from './layout-agent-routing.module';
import { LayoutAgentComponent } from './layout-agent.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  	imports: [CommonModule, LayoutAgentRoutingModule],
  	declarations: [LayoutAgentComponent, HeaderComponent, SidebarComponent]
})
export class LayoutAgentModule { }
