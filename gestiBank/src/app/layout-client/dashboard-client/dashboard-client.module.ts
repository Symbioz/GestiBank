import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardClientRoutingModule } from './dashboard-client-routing.module';
import { DashboardClientComponent } from './dashboard-client.component';

@NgModule({
  	imports: [
    	CommonModule,
    	DashboardClientRoutingModule
  	],
  	declarations: [DashboardClientComponent]
})
export class DashboardClientModule { }
