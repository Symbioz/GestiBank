import { Component, OnInit } from '@angular/core';
import { Notification, Compte, Operation } from '../../models/';
enum TypeOp { debit, credit }


@Component({
  selector: 'app-layout-client',
  templateUrl: './layout-client.component.html',
  styleUrls: ['./layout-client.component.scss']
})
export class LayoutClientComponent implements OnInit {

	//Tests : création d'une liste de notification pour un client donné
	/*notifications = [	new Notification(6501, "danger", "Virement refusé", new Date('2018-02-01')),
          				new Notification(6502, "info", "Chequier arrivé en agence", new Date('2018-02-02')),
          				new Notification(6503, "success", "Mot de passe changé avec succès",new Date('2018-02-03')),
                      	new Notification(6504, "warning", "Une autorisation de prélévement à été ajouté", new Date('2018-02-04')),
          				new Notification(6505, "info", "Un nouveau conseiller vous a été attribué", new Date('2018-02-05'))];*/

	//Tests : création de listes d'opération
	operationsCpt1 = [	new Operation(8011, "02/01/2018", "facture edf", 76.56, TypeOp.debit),,
						new Operation(8015, "03/01/2018", "facture telephone", 10, TypeOp.debit),
						new Operation(8089, "05/01/2018", "facture box", 29.90, TypeOp.debit),
						new Operation(8109, "05/01/2018", "remboursement", 13, TypeOp.debit),
						new Operation(8295, "05/01/2018", "assurance", 56.28, TypeOp.debit),
						new Operation(8298, "05/01/2018", "salaire", 1800, TypeOp.credit)];

	//Tests : création de listes d'opération
	operationsCpt2 = [	new Operation(8011, "01/01/2018", "interets", 65.98, TypeOp.debit),
						new Operation(8011, "12/01/2018", "virement", 2500, TypeOp.credit)];						

	//Tests : création d'une liste de compte
	comptes = [	new Compte("Compte Bancaire", 1234567890000, 1000, "18/07/1986", 0, 0, this.operationsCpt1),
				new Compte("Compte Remunéré", 1234567890000, 10000, "12/07/1998", 0, 0, this.operationsCpt2)];

  	constructor() { }

  	ngOnInit() {
  	}

}
