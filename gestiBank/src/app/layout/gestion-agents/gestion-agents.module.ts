import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionAgentsRoutingModule } from './gestion-agents-routing.module';
import { GestionAgentsComponent } from './gestion-agents.component';

@NgModule({
  imports: [
    CommonModule,
    GestionAgentsRoutingModule
  ],
  declarations: [GestionAgentsComponent]
})
export class GestionAgentsModule { }
