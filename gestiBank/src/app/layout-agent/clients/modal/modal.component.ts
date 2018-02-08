import { Component, Input, OnInit,OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import {Demande,DemandeChequier,DemandeModif,DemandeCreationCompte,Client,clients,Adresse} from '../../../../data/data';
import {UserService} from '../../../../services/userService';
import {NotificationsComponent} from '../../components/notifications/notifications.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import {FormsModule} from '@angular/forms'
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from  '@angular/router';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    providers: [UserService],
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  closeResult: string;
  modif:boolean;
  notif: NotificationsComponent = new NotificationsComponent(); // Notification qui s'affiche quand on clique sur certains boutons
  demandes: Observable<Demande[]>;
  client: Client;
  clients: Observable<Client[]>;
  isLoading = false; // simulation de latence
  isLoadingClient = false; // pour les clients dans l'onglet modif
  isSearching = false; // quand on affiche une liste de clients après avoir chercher dans une input text
  AdresseTemp:Adresse;
  userForm: FormGroup;
  private sub: any;
  id: number;


  @Input() clientModal:Client;


  constructor(private modalService: NgbModal,
                private userService: UserService,
                private route: ActivatedRoute,
                private router: Router) { }



    ngOnInit() { 
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];
      });

      this.userForm = new FormGroup({
        username: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        email: new FormControl('', [
          Validators.required, 
          Validators.pattern("[^ @]*@[^ @]*")
        ])
      });

      //si le param id est renseigné il faut chercher le User
      if (this.id) { //edit form
        this.userService.findById(this.id).subscribe(
          client => {
            this.id = client.id;
            this.userForm.patchValue({
              nomUtilisateur: client.nomUtilisateur,
              adresse: client.adresse,
              couriel: client.couriel,
            });
          },
          error => {
            console.log(error);
          }
        );
      }
    }

    ngOnDestroy(): void { //suppression de l'écouteur lors du déchargement du composant
      this.sub.unsubscribe();
    }

    onSubmit() {
      if (this.userForm.valid) {
        if (this.id) {
        
          let clientTemp : Client = new Client(
          this.userForm.controls['id'].value,
          this.userForm.controls['prenom'].value,
          this.userForm.controls['nom'].value,
          this.userForm.controls['password'].value,
          this.userForm.controls['nomUtilisateur'].value,
          this.userForm.controls['couriel'].value,
          new Adresse("adressetemp",1,"blabla"),
          this.userForm.controls['numTel'].value,
          this.userForm.controls['nbEnfants'].value,
          this.userForm.controls['situation'].value,
          this.userForm.controls['comptes'].value
        );
          this.userService.saveClient(clientTemp).subscribe(
          client => {
            this.client = clientTemp;
            console.log("SAVE Client OK");
            this.refresh();

          },
          err => {
            console.log(err);
          }
          );
        } else {
          let clientTemp : Client = new Client(
          null,
          this.userForm.controls['prenom'].value,
          this.userForm.controls['nom'].value,
          this.userForm.controls['password'].value,
          this.userForm.controls['nomUtilisateur'].value,
          this.userForm.controls['couriel'].value,
          new Adresse("adressetemp",1,"blabla"),
          this.userForm.controls['numTel'].value,
          this.userForm.controls['nbEnfants'].value,
          this.userForm.controls['situation'].value,
          this.userForm.controls['comptes'].value
        );
          this.userService.saveClient(clientTemp).subscribe(
          client => {
            this.client = clientTemp;
            console.log("ADD USER OK");
            this.refresh();
//A FAIRE ici : vérifier avec le source

          },
          err => {
            console.log(err);
          }
          );
        }
      }
      this.userForm.reset();
      //this.router.navigate(['/user'])
    }

    //redirectUserPage() {
      //this.router.navigate(['/user']);
    //}
    refresh() {

      this.userService.findAll().subscribe(
          users => {
            console.log ("GET ALL USER OK ");
          }
        );

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


// import { Component, Input, OnInit } from '@angular/core';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { TranslateService } from '@ngx-translate/core';
// import {Demande,DemandeChequier,DemandeModif,DemandeCreationCompte,Client,clients,Adresse} from '../../../../data/data';
// import {UserService} from '../../../../services/userService';
// import {NotificationsComponent} from '../../components/notifications/notifications.component';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/finally';
// import {FormsModule} from '@angular/forms'
// import {FormControl, FormGroup, Validators} from '@angular/forms';
// import { ActivatedRoute, Router } from  '@angular/router';


// @Component({
//     selector: 'app-modal',
//     templateUrl: './modal.component.html',
//     providers: [UserService],
//     styleUrls: ['./modal.component.scss']
// })
// export class ModalComponent {

//   closeResult: string;
//   modif:boolean;
//   notif: NotificationsComponent = new NotificationsComponent(); // Notification qui s'affiche quand on clique sur certains boutons
//   demandes: Observable<Demande[]>;
//   clients: Observable<Client[]>;
//   isLoading = false; // simulation de latence
//   isLoadingClient = false; // pour les clients dans l'onglet modif
//   isSearching = false; // quand on affiche une liste de clients après avoir chercher dans une input text
//   AdresseTemp:Adresse;
//   userForm: FormGroup;
//   private sub: any;
 
//    @Input() clientModal:Client;
//    clientTemp:Client;

//     constructor(private modalService: NgbModal,
//                 private userService: UserService,
//                 private route: ActivatedRoute,
//                 private router: Router) { }


// ngOnInit() {

//     this.sub = this.route.params.subscribe(params => {
//         this.id = params['id'];
//       });

//     this.userForm = new FormGroup({
//       username : new FormControl('',Validators.required),
//       address: new FormControl('',Validators.required),
//       email: new FormControl('',
//         [Validators.required
//         ,Validators.pattern("[^ @]*@[^ @]*")]
//         )
//     });

//   }


//   ngOnDestroy(): void { //suppression de l'écouteur lors du déchargement du composant
//       this.sub.unsubscribe();
//   }
//   if (this.userForm.valid) {
//         if (this.id) {
//           let user: User = new User(this.id, 
//           this.userForm.controls['username'].value,
//           this.userForm.controls['address'].value,
//           this.userForm.controls['email'].value);
//           this.userService.saveUser(user).subscribe(
//           user => {
//             this.user = user;
//             console.log("SAVE USER OK");
//             this.refresh();

//           },
//           err => {
//             console.log(err);
//           }
//           );
//         } else {
//           let user: User = new User(0, 
//           this.userForm.controls['username'].value,
//           this.userForm.controls['address'].value,
//           this.userForm.controls['email'].value);
//           this.userService.saveUser(user).subscribe(
//           user => {
//             this.user = user;
//             console.log("ADD USER OK");
//             this.refresh();

//           },
//           err => {
//             console.log(err);
//           }
//           );
//         }
//       }
//   onSubmit(){
//     if (this.id) {
//       if (this.userForm.valid) {
//       let clientTemp : client = new Client(
//         this.userForm.controls['id'].value,
//         this.userForm.controls['prenom'].value,
//         this.userForm.controls['nom'].value,
//         this.userForm.controls['password'].value,
//         this.userForm.controls['nomUtilisateur'],
//         this.userForm.controls['couriel'].value,
//         new Adresse("adressetemp",1,"blabla"),
//         this.userForm.controls['numTel'].value,
//         this.userForm.controls['nbEnfants'].value,
//         this.userForm.controls['situation'].value,
//         this.userForm.controls['comptes'].value
//         );
//       this.userService.saveUser(user).subscribe(user => {
//             this.user = user;
//             console.log("SAVE USER OK");
//             this.refresh();

//           },
//           err => {
//             console.log(err);
//           });
//        }
//     } else {
//        let clientTemp : client = new Client(
//         this.userForm.controls['id'].value,
//         this.userForm.controls['prenom'].value,
//         this.userForm.controls['nom'].value,
//         this.userForm.controls['password'].value,
//         this.userForm.controls['nomUtilisateur'],
//         this.userForm.controls['couriel'].value,
//         new Adresse("adressetemp",1,"blabla"),
//         this.userForm.controls['numTel'].value,
//         this.userForm.controls['nbEnfants'].value,
//         this.userForm.controls['situation'].value,
//         this.userForm.controls['comptes'].value
//         );
//         this.userService.saveUser(user).subscribe(
//           user => {
//             this.user = user;
//             console.log("ADD USER OK");
//             this.refresh();

//           },
//           err => {
//             console.log(err);
//           }
//           );
//       }
//     this.userForm.reset();
//     this.modif=false;
//   }
    

//     getClients() { // récupère tous les clients via le service
//     this.isLoadingClient = true;
//     this.clients = this.userService.getClients() 
//                         // Normalement à faire : error handling
//                         .finally(() => this.isLoadingClient = false);
//      }

//      getDemandes() { // récupère tous les conseillers via le service
//     this.isLoading = true;
//     this.demandes = this.userService.getDemandes()
//                         // Normalement à faire : error handling
//                         .finally(() => this.isLoading = false);
//   }

//     modifierClient() { // récupère tous les conseillers via le service

//       console.log("test");
//   }
  
//     open(content) {
//         this.modalService.open(content).result.then((result) => {
//             this.closeResult = `Closed with: ${result}`;
//         }, (reason) => {
//             this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//         });
//     }

//     private getDismissReason(reason: any): string {
//         if (reason === ModalDismissReasons.ESC) {
//             return 'by pressing ESC';
//         } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//             return 'by clicking on a backdrop';
//         } else {
//             return  `with: ${reason}`;
//         }
//     }

//     test(){
//       console.log("test");
//     }
// }