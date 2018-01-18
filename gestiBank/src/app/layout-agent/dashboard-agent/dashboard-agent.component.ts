import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../router.animations';

@Component({
  	selector: 'app-dashboard-agent',
  	templateUrl: './dashboard-agent.component.html',
  	styleUrls: ['./dashboard-agent.component.scss'],
    animations: [routerTransition()]
})
export class DashboardAgentComponent {

	pushRightClass: string = 'push-right';


  	constructor(){
    }

}
