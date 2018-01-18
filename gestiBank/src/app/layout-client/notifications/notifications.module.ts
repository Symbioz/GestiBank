import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
 	imports: [
   	 	CommonModule,
    	NotificationsRoutingModule,
        TranslateModule,
        PageHeaderModule
  	],
  	declarations: [NotificationsComponent]
})
export class NotificationsModule { }
