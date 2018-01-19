import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-consultations',
    templateUrl: './consultations.component.html',
    styleUrls: ['./consultations.component.scss'],
    animations: [routerTransition()]
})
export class ConsultationsComponent implements OnInit {

  	constructor() {}

  	ngOnInit() {}

}
