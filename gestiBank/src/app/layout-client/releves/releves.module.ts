import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { RelevesRoutingModule } from './releves-routing.module';
import { RelevesComponent } from './releves.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  	imports: [
    	CommonModule,
    	RelevesRoutingModule,
    	TranslateModule,
        PageHeaderModule
  	],
  	declarations: [RelevesComponent]
})
export class RelevesModule { }
