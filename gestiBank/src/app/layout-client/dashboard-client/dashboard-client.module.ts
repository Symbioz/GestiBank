import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardClientRoutingModule } from './dashboard-client-routing.module';
import { DashboardClientComponent } from './dashboard-client.component';

@NgModule({
  	imports: [
    	CommonModule,
    	DashboardClientRoutingModule,
        TranslateModule
  	],
  	declarations: [DashboardClientComponent]
})
export class DashboardClientModule { }
