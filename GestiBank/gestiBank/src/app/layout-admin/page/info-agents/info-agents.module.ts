import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { InfoAgentsRoutingModule } from './info-agents-routing.module';
import { InfoAgentsComponent } from './info-agents.component';
import { TableauClientsAgentComponent}  from '../components/tableau-clients-agent/tableau-clients-agent.component';
import { BoutonValidationAffectationComponent } from '../components/bouton-validation-affectation/bouton-validation-affectation.component';



@NgModule({
  imports: [
    CommonModule,
    InfoAgentsRoutingModule,
    TranslateModule

  ],
  declarations: [InfoAgentsComponent,TableauClientsAgentComponent,BoutonValidationAffectationComponent]
})
export class InfoAgentsModule { }
