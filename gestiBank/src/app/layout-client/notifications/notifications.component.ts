import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../router.animations';

import { Notification, Compte, Operation } from '../../../models/';
enum TypeOp { debit, credit }

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss'],
    animations: [routerTransition()]
})
export class NotificationsComponent implements OnInit {



	//Tests : création d'une liste de notification pour un client donné
	notifications = [	new Notification(6501, "important", "virement refusé"),
					 	new Notification(6502, "information", "chequier arrivé en agence"),
					 	new Notification(6503, "succes", "mot de passe changé avec succès"),
					 	new Notification(6504, "information", "un nouveau conseiller vous a été attribué")];

  	constructor() {}

    ngOnInit() {
      }

}
