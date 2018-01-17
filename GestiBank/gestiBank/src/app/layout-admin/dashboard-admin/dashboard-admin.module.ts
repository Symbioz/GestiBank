import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { DashboardAdminComponent } from './dashboard-admin.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardAdminRoutingModule
  ],
  declarations: [DashboardAdminComponent]
})
export class DashboardAdminModule { }
