import { NgModule } from '@angular/core';
//import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { NotifsRoutingModule } from './notifs-routing.module';
import { NotifsListComponent } from './notifs-list/notifs-list.component';
import { PageHeaderModule } from '../../shared';



@NgModule({
  imports: [
    CommonModule,
    NotifsRoutingModule,
    TranslateModule,
    NgbAlertModule.forRoot(),
    PageHeaderModule
  ],
  //exports: [RouterModule],
  declarations: [NotifsListComponent]
})
export class NotifsModule { }
