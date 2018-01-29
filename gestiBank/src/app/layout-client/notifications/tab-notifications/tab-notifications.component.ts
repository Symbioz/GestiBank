import { Component, OnInit, Input } from '@angular/core';
import { Notification } from '../../../../models/';

@Component({
    selector: 'app-tab-notifications',
    templateUrl: './tab-notifications.component.html',
    styleUrls: ['./tab-notifications.component.scss']
})
export class TabNotificationsComponent implements OnInit {

    @Input() notifs: Notification[];
    
    constructor() {}

    public closeAlert(alert: any) {
        const index: number = this.notifs.indexOf(alert);
        this.notifs.splice(index, 1);
    }

    ngOnInit() {
    }

}
