import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../router.animations';

import { Operation, Compte } from '../../../models';
import { TabsetComptesComponent } from './tabset-comptes/tabset-comptes.component';

enum TypeOp { debit, credit }

@Component({
    selector: 'app-consultations',
    templateUrl: './consultations.component.html',
    styleUrls: ['./consultations.component.scss'],
    animations: [routerTransition()],
    
})
export class ConsultationsComponent implements OnInit {

	//Tests : création de listes d'opération
	operationsCpt1 = [	new Operation(8011, 76.56, "02/01/2018", "facture edf", TypeOp.debit),
						new Operation(8015, 10, "03/01/2018", "facture telephone", TypeOp.debit),
						new Operation(8089, 29.90, "05/01/2018", "facture box", TypeOp.debit),
						new Operation(8109, 13, "05/01/2018", "remboursement", TypeOp.debit),
						new Operation(8295, 56.28, "05/01/2018", "assurance", TypeOp.debit),
						new Operation(8298, 1800, "05/01/2018", "salaire", TypeOp.credit)];

	//Tests : création de listes d'opération
	operationsCpt2 = [	new Operation(8011, 65.98, "01/01/2018", "interets", TypeOp.credit),
						new Operation(8011, 2500, "12/01/2018", "virement", TypeOp.credit)];						

	//Tests : création d'une liste de compte
	comptes = [	new Compte("Compte Bancaire", 1234567890000, 1000, "01/01/1900", 0, 300, this.operationsCpt1),
				new Compte("Compte Remunéré", 1234567890100, 10000, "12/07/1998", 0, 0, this.operationsCpt2)];

  	constructor() {}

  	ngOnInit() {}

}
