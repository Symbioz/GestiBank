import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import {Demande,DemandeChequier,DemandeModif,DemandeCreationCompte,Client,clients,Adresse} from '../../../../data/data';
import {UserService} from '../../../../services/userService';
import {NotificationsComponent} from '../../components/notifications/notifications.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import {FormsModule} from '@angular/forms'
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
 clientTemp:Client;
 AdresseTemp:Adresse;
 userForm: FormGroup;

    constructor(private modalService: NgbModal,private userService: UserService) { }


ngOnInit() {
    this.getClients
    this.userForm = new FormGroup({
      username : new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      email: new FormControl('',
        [Validators.required
        ,Validators.pattern("[^ @]*@[^ @]*")]
        )
    });

  }


  ngOnDestroy(): void{

  }
  onSubmit(){
    if (this.userForm.valid) {
      let clientTemp : client = new Client(
        this.userForm.controls['id'].value,
        this.userForm.controls['prenom'].value,
        this.userForm.controls['nom'].value,
        this.userForm.controls['nomUtilisateur'].value,
        this.userForm.controls['password'].value,
        this.userForm.controls['couriel'].value,
        new Adresse("adressetemp",1,"blabla"),
        this.userForm.controls['numTel'].value,
        this.userForm.controls['nbEnfants'].value,
        this.userForm.controls['situation'].value,
        this.userForm.controls['comptes'].value);
      this.userService.saveUser(user).subscribe();
    }
    this.userForm.reset();
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

    modifierClient() { // récupère tous les conseillers via le service

      console.log("test");
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

    test(){
      console.log("test");
    }
}
