import { Component, OnInit } from '@angular/core';
import { NotificationService } from "../../../../services";
import { Notification } from "../../../../models";
import { ActivatedRoute, Router } from  '@angular/router';
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

    idClient: number;
    private sub: any;

  	constructor(private route: ActivatedRoute, private router: Router, private notificationService: NotificationService) { }

  	//Init
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
          //this.id = params['id'];
          this.idClient = 1;
        })

        this.getAllNotifications();
    }

  	getAllNotifications() {
  		this.notificationService.findClientNotifications(this.idClient).subscribe(
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

    ngOnDestroy(): void { //suppression de l'écouteur lors du déchargement du composant
      this.sub.unsubscribe();
    }


}
