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
  	notifications = [	new Notification(6501, "danger", "Virement refusé", new Date('2018-02-01')),
          					 	new Notification(6502, "info", "Chequier arrivé en agence", new Date('2018-02-02')),
          					 	new Notification(6503, "success", "Mot de passe changé avec succès",new Date('2018-02-03')),
                      new Notification(6504, "warning", "Une autorisation de prélévement à été ajouté", new Date('2018-02-04')),
          					 	new Notification(6505, "info", "Un nouveau conseiller vous a été attribué", new Date('2018-02-05'))];

  	constructor() {}

    ngOnInit() {
      }

}
