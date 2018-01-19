import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoAgentsRoutingModule } from './info-agents-routing.module';
import { InfoAgentsComponent } from './info-agents.component';

@NgModule({
  imports: [
    CommonModule,
    InfoAgentsRoutingModule
  ],
  declarations: [InfoAgentsComponent]
})
export class InfoAgentsModule { }
