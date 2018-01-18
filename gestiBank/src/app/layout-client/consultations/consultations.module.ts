import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ConsultationsRoutingModule } from './consultations-routing.module';
import { ConsultationsComponent } from './consultations.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  	imports: [
   		CommonModule,
    	ConsultationsRoutingModule,
        TranslateModule,
        PageHeaderModule
 	],
  	declarations: [ConsultationsComponent]
})
export class ConsultationsModule { }
