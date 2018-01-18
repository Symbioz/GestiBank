import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditerAgentsRoutingModule } from './editer-agents-routing.module';
import { EditerAgentsComponent } from './editer-agents.component';

@NgModule({
  imports: [
    CommonModule,
    EditerAgentsRoutingModule
  ],
  declarations: [EditerAgentsComponent]
})
export class EditerAgentsModule { }
