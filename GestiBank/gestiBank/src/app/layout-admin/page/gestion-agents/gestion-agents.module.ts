import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GestionAgentsRoutingModule } from './gestion-agents-routing.module';
import { GestionAgentsComponent } from './gestion-agents.component';
import { TableauAgentsComponent}  from '../components/tableau-agents/tableau-agents.component';
import { BoutonCreationAgentsComponent} from '../components/bouton-creation-agents/bouton-creation-agents.component';
import { ChercherComponent} from '../components/chercher/chercher.component';
import { BoutonSuppressionAgentsComponent } from '../components/bouton-suppression-agents/bouton-suppression-agents.component';

@NgModule({
  imports: [
    CommonModule,
    GestionAgentsRoutingModule,
    TranslateModule,
    NgbModule.forRoot(),

  ],
  declarations: [GestionAgentsComponent,TableauAgentsComponent,BoutonCreationAgentsComponent,ChercherComponent,BoutonSuppressionAgentsComponent]
})
export class GestionAgentsModule { }
