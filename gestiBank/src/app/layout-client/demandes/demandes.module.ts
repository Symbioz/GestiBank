import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DemandesRoutingModule } from './demandes-routing.module';
import { DemandesComponent } from './demandes.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  	imports: [
    	CommonModule,
    	DemandesRoutingModule,
        TranslateModule,
        PageHeaderModule
  	],
  	declarations: [DemandesComponent]
})
export class DemandesModule { }
