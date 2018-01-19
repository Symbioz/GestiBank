import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../router.animations';

@Component({
  	selector: 'app-dashboard-client',
  	templateUrl: './dashboard-client.component.html',
  	styleUrls: ['./dashboard-client.component.scss'],
    animations: [routerTransition()]
})
export class DashboardClientComponent implements OnInit {

	constructor() {}

  	ngOnInit() {}
}
