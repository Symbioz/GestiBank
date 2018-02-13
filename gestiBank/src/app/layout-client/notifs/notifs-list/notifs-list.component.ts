import { Component, OnInit } from '@angular/core';
import { NotificationService } from "../../../../services";
import { Notification } from "../../../../models";
import { Router } from  '@angular/router';

@Component({
  selector: 'app-notifs-list',
  templateUrl: './notifs-list.component.html',
  styleUrls: ['./notifs-list.component.scss'],
  providers: [NotificationService]
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
				this.router.navigate(['/notifications']);
				console.log('notification supprimée')
			}
		);
  	}

  	public closeAlert(alert: any) {
        const index: number = this.notifications.indexOf(alert);
        this.notifications.splice(index, 1);
    }

}
