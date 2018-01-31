import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { DashboardAdminComponent } from './dashboard-admin.component';

import { StatModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    DashboardAdminRoutingModule,
    TranslateModule,
    StatModule
  ],
  declarations: [DashboardAdminComponent]
})
export class DashboardAdminModule { }