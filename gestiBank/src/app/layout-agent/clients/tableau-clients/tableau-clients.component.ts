import { Component, OnInit,Input } from '@angular/core';
import {Demande,DemandeChequier,DemandeModif,DemandeCreationCompte,Client,clients} from '../../../../data/data';
import {UserService} from '../../../../services/userService';
import {NotificationsComponent} from '../../components/notifications/notifications.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-tableau-clients',
  templateUrl: './tableau-clients.component.html',
   providers: [UserService],
  styleUrls: ['./tableau-clients.component.scss']
})
export class TableauClientsComponent implements OnInit {


  notif: NotificationsComponent = new NotificationsComponent(); // Notification qui s'affiche quand on clique sur certains boutons
  demandes: Observable<Demande[]>;
  clients: Observable<Client[]>;
  isLoading = false; // simulation de latence
  isLoadingClient = false; // pour les clients dans l'onglet modif
  isSearching = false; // quand on affiche une liste de clients après avoir chercher dans une input text
 


    constructor(private userService: UserService) { }

    ngOnInit() {
        this.getClients();
    }

    getClients() { // récupère tous les clients via le service
    this.isLoadingClient = true;
    this.clients = this.userService.getClients() 
                        // Normalement à faire : error handling
                        .finally(() => this.isLoadingClient = false);
     }

     getDemandes() { // récupère tous les conseillers via le service
    this.isLoading = true;
    this.demandes = this.userService.getDemandes()
                        // Normalement à faire : error handling
                        .finally(() => this.isLoading = false);
  }

}
