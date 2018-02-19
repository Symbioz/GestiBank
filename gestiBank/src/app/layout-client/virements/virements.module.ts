import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { VirementsRoutingModule } from './virements-routing.module';
import { VirementsComponent } from './virements.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  	imports: [
    	CommonModule,
    	VirementsRoutingModule,
        TranslateModule,
        PageHeaderModule
  	],
  	declarations: [VirementsComponent]
})
export class VirementsModule { }
