import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { PageHeaderModule } from '../../shared';
import { TabNotificationsComponent } from './tab-notifications/tab-notifications.component';

const routes: Routes = [
	{path: 'notifications', component: TabNotificationsComponent}
];

@NgModule({
 	imports: [
   	 	CommonModule,
    	NotificationsRoutingModule,
        TranslateModule,
        NgbAlertModule.forRoot(),
        PageHeaderModule
  	],
  	exports: [RouterModule],
  	declarations: [NotificationsComponent, TabNotificationsComponent]
})
export class NotificationsModule { }
