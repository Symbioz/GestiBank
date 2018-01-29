import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeEnCoursRoutingModule } from './demande-en-cours-routing.module';
import {DemandeEnCoursComponent} from './demande-en-cours.component';
import { EtiquetteComponent } from './etiquette/etiquette.component';
import { StatModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    DemandeEnCoursRoutingModule,
    StatModule
  ],
  declarations: [DemandeEnCoursComponent, EtiquetteComponent]
})
export class DemandeEnCoursModule { }
