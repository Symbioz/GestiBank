import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Router } from  '@angular/router';
import { CompteService } from "../../../services";

import { Operation, Compte, CompteCourant, CompteRemunere } from '../../../models';
import { TabsetComptesComponent } from './tabset-comptes/tabset-comptes.component';

enum TypeOp { debit, credit }

@Component({
    selector: 'app-consultations',
    templateUrl: './consultations.component.html',
    styleUrls: ['./consultations.component.scss'],
    animations: [routerTransition()],
    
})
export class ConsultationsComponent implements OnInit {

	//Gestion du select compte
  	//@Input() comptes: Compte[];

	constructor() {}

  	ngOnInit() {}

}
