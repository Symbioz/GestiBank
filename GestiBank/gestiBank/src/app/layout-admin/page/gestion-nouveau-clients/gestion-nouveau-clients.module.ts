import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionNouveauClientsRoutingModule } from './gestion-nouveau-clients-routing.module';
import { GestionNouveauClientsComponent } from './gestion-nouveau-clients.component';

@NgModule({
  imports: [
    CommonModule,
    GestionNouveauClientsRoutingModule
  ],
  declarations: [GestionNouveauClientsComponent]
})
export class GestionNouveauClientsModule { }
