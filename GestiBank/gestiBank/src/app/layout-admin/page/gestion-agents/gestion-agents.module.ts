import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { GestionAgentsRoutingModule } from './gestion-agents-routing.module';
import { GestionAgentsComponent } from './gestion-agents.component';
import { TableauAgentsComponent}  from '../components/tableau-agents/tableau-agents.component';



@NgModule({
  imports: [
    CommonModule,
    GestionAgentsRoutingModule,
    TranslateModule
  ],
  declarations: [GestionAgentsComponent,TableauAgentsComponent]
})
export class GestionAgentsModule { }
