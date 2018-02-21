import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-demandes',
    templateUrl: './demandes.component.html',
    styleUrls: ['./demandes.component.scss'],
    animations: [routerTransition()]
})
export class DemandesComponent implements OnInit {

    constructor() {}

    ngOnInit() {
      }

}
