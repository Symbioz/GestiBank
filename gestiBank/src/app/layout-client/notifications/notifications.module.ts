import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { PageHeaderModule } from '../../shared';
import { TabNotificationsComponent } from './tab-notifications/tab-notifications.component';

@NgModule({
 	imports: [
   	 	CommonModule,
    	NotificationsRoutingModule,
        TranslateModule,
        PageHeaderModule
  	],
  	declarations: [NotificationsComponent, TabNotificationsComponent]
})
export class NotificationsModule { }
