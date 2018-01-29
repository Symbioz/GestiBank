import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionAffectationRoutingModule } from './gestion-affectation-routing.module';
import { GestionAffectationComponent } from './gestion-affectation.component';

@NgModule({
  imports: [
    CommonModule,
    GestionAffectationRoutingModule
  ],
  declarations: [GestionAffectationComponent]
})
export class GestionAffectationModule { }
