import { Component, OnInit } from '@angular/core';
import { Notification, Compte, Operation } from '../../models/';

@Component({
  selector: 'app-layout-client',
  templateUrl: './layout-client.component.html',
  styleUrls: ['./layout-client.component.scss']
})
export class LayoutClientComponent implements OnInit {

	//Tests : création d'une liste de notification pour un client donné
	notifications = [	new Notification(6501, "important", "virement refusé"),
					 	new Notification(6502, "information", "chequier arrivé en agence"),
					 	new Notification(6503, "succes", "mot de passe changé avec succès"),
					 	new Notification(6504, "information", "un nouveau conseiller vous a été attribué")];

	//Tests : création de listes d'opération
	operationsCpt1 = [	new Operation(8011, "02/01/2018", "facture edf", 76.56),
						new Operation(8011, "05/01/2018", "salaire", 1800)];

	//Tests : création d'une liste de compte
	comptes = [	new Compte(1234567890000, 1000, "01/01/1900", 0, 0, operationsCpt1),
				new Compte(1234567890000, 10000, "12/07/1998", 0, 0, operationsCpt2)];

  	constructor() { }

  	ngOnInit() {
  	}

}
