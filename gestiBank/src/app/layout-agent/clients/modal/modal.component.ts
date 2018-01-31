import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import {Demande,DemandeChequier,DemandeModif,DemandeCreationCompte,Client,clients} from '../../../../data/data';
import {UserService} from '../../../../services/userService';
import {NotificationsComponent} from '../../components/notifications/notifications.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';


@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    providers: [UserService],
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    closeResult: string;
    modif:boolean;

  notif: NotificationsComponent = new NotificationsComponent(); // Notification qui s'affiche quand on clique sur certains boutons
  demandes: Observable<Demande[]>;
  clients: Observable<Client[]>;
  isLoading = false; // simulation de latence
  isLoadingClient = false; // pour les clients dans l'onglet modif
  isSearching = false; // quand on affiche une liste de clients après avoir chercher dans une input text
 
 
 @Input() clientModal:Client;

    constructor(private modalService: NgbModal,private userService: UserService) { }

    ngOnInit() {
        this.getClients
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

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
