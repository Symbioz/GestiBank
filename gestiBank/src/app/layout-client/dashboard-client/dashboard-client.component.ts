import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../router.animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Compte} from '../../../../models';

@Component({
  	selector: 'app-dashboard-client',
  	templateUrl: './dashboard-client.component.html',
  	styleUrls: ['./dashboard-client.component.scss'],
    animations: [routerTransition()]
})
export class DashboardClientComponent implements OnInit {

	//Gestion du select compte
  	@Input() comptes: Compte[];

	constructor() {}

  	ngOnInit() {}
}
