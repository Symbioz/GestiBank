import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-virements',
    templateUrl: './virements.component.html',
    styleUrls: ['./virements.component.scss'],
    animations: [routerTransition()]
})
export class VirementsComponent implements OnInit {

    constructor() {}

    ngOnInit() {
      }

}
