import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-releves',
    templateUrl: './releves.component.html',
    styleUrls: ['./releves.component.scss'],
    animations: [routerTransition()]
})
export class RelevesComponent implements OnInit {

  	constructor() {}

    ngOnInit() {
      }

}
