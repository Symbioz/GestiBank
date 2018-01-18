import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeEnCoursRoutingModule } from './demande-en-cours-routing.module';
import {DemandeEnCoursComponent} from './demande-en-cours.component';
@NgModule({
  imports: [
    CommonModule,
    DemandeEnCoursRoutingModule
  ],
  declarations: [DemandeEnCoursComponent]
})
export class DemandeEnCoursModule { }
