import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import {clients} from '../../../shared/data';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    closeResult: string;
    modif:boolean;

  notif: NotificationsComponent = new NotificationsComponent(); // Notification qui s'affiche quand on clique sur certains boutons
  conseillers: Observable<Conseiller[]>; // pour récupérer la liste des conseillers afin de leur affecter des clients
  demandes: Observable<DemandeInscription[]>;
  clients: Observable<Client[]>;
  isLoading = false; // simulation de latence
  isLoadingClient = false; // pour les clients dans l'onglet modif
  isSearching = false; // quand on affiche une liste de conseillers après avoir chercher dans une input text
  conseillerRecherche: string = ''; // garder sous la main le conseiller recherché
  clientRecherche: string = ''; // garder sous la main le client recherché
  selectedDemande: DemandeInscription; // garder sous la main la demande que l'on va affecter à un conseiller
  selectedClient: Client; // Pour l'onglet modifs
  selectedConseiller: Conseiller; // Pour l'onglet modifs




    constructor(private modalService: NgbModal,private demandeService: DemandeService, private conseillerService: ConseillerService, private clientService: ClientService) { }

    ngOnInit() {
        this.getClients
    }

    getClients() { // récupère tous les clients via le service
    this.isLoadingClient = true;
    this.clients = this.clientService.getClients() 
                        // Normalement à faire : error handling
                        .finally(() => this.isLoadingClient = false);
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
