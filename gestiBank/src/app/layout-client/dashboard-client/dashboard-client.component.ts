import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../router.animations';

@Component({
  	selector: 'app-dashboard-client',
  	templateUrl: './dashboard-client.component.html',
  	styleUrls: ['./dashboard-client.component.scss'],
    animations: [routerTransition()]
})
export class DashboardClientComponent {

	constructor(private translate: TranslateService) {
        this.translate.addLangs(['en', 'fr']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }





}
