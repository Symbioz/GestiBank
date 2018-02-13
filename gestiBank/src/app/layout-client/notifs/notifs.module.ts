import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotifsRoutingModule } from './notifs-routing.module';
import { NotifsListComponent } from './notifs-list/notifs-list.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NotifsRoutingModule,
    NgbAlertModule
  ],
  declarations: [NotifsListComponent]
})
export class NotifsModule { }
