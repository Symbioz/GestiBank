import { Component, OnInit, Input } from '@angular/core';
import { Notification } from '../../../../models/';

@Component({
  	selector: 'app-tab-notifications',
  	templateUrl: './tab-notifications.component.html',
  	styleUrls: ['./tab-notifications.component.scss']
})
export class TabNotificationsComponent implements OnInit {

	@Input() notifs: Notification[];
  	
  	public alerts: Array<any> = [];
    
    constructor() {
        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

  	ngOnInit() {
  	}

}
