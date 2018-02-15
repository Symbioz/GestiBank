import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandesAgentRoutingModule } from './demandes-agent-routing.module';
import { DemandeModalComponent } from './demande-modal/demande-modal.component';
import { ListDemandesComponent } from './list-demandes/list-demandes.component';

@NgModule({
  imports: [
    CommonModule,
    DemandesAgentRoutingModule
  ],
  declarations: [DemandeModalComponent, ListDemandesComponent]
})
export class DemandesAgentModule { }
