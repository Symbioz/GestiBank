import { Component, OnInit } from '@angular/core';
import { NotificationService } from "../../../../services";
import { Notification } from "../../../../models";
import { Router } from  '@angular/router';
import { routerTransition } from '../../../router.animations';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-notifs-list',
  templateUrl: './notifs-list.component.html',
  styleUrls: ['./notifs-list.component.scss'],
  providers: [NotificationService],
  animations: [routerTransition()]
})
export class NotifsListComponent implements OnInit {

  	private notifications: Notification[];

  	constructor(private router: Router, private notificationService: NotificationService) { }

  	ngOnInit() {
      this.getAllNotifications();
  	}

  	getAllNotifications() {
  		this.notificationService.findAll().subscribe(
  			notifs => {
  				this.notifications = notifs
  			},
  			err => {
  				console.log(err);
  			}
  		);
  	}

  	deleteNotification(notification: Notification) {
  		this.notificationService.deleteNotificationById(notification.id).subscribe(
			res => {
				this.getAllNotifications();
				console.log('notification supprimée')
			}
		);
  	}


}
