import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConsultationsRoutingModule } from './consultations-routing.module';
import { ConsultationsComponent } from './consultations.component';
import { PageHeaderModule } from '../../shared';
import { TabsetComptesComponent } from './tabset-comptes/tabset-comptes.component';

@NgModule({
  	imports: [
   		CommonModule,
    	ConsultationsRoutingModule,
        TranslateModule,
        NgbModule.forRoot(),
        PageHeaderModule,
        FormsModule
 	],
  	declarations: [ConsultationsComponent, TabsetComptesComponent]
})
export class ConsultationsModule { }
