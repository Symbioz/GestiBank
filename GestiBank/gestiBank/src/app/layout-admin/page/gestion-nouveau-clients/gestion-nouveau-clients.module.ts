import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GestionNouveauClientsRoutingModule } from './gestion-nouveau-clients-routing.module';
import { GestionNouveauClientsComponent } from './gestion-nouveau-clients.component';
import { TableauDemandeCompteComponent}  from '../components/tableau-demande-compte/tableau-demande-compte.component';

@NgModule({
  imports: [
    CommonModule,
    GestionNouveauClientsRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [GestionNouveauClientsComponent, TableauDemandeCompteComponent]
})
export class GestionNouveauClientsModule { }
