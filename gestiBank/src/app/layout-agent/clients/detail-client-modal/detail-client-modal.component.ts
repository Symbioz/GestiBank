import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Client } from '../../../../models';
import { ClientService } from '../../../../service/clientService';
import { ActivatedRoute, Router } from  '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-detail-client-modal',
  templateUrl: './detail-client-modal.component.html',
  styleUrls: ['./detail-client-modal.component.scss'],
  providers: [ClientService]
})
export class DetailClientModalComponent implements OnInit, OnDestroy {

	id: number;
 	matriculeAgent: number;
	client: Client;
	clientForm: FormGroup;
	private sub: any;
  	closeResult: string;
  	@Input() clientModal:Client;


  constructor(private route: ActivatedRoute,
		private router: Router,
		private clientService: ClientService,
    private modalService: NgbModal) { }

	ngOnInit() { 
		  	this.id=this.clientModal.id;

		this.clientForm = new FormGroup({
			identifiant: new FormControl('', Validators.required),
			adresse: new FormControl('', Validators.required),
			email: new FormControl('', [
				Validators.required, 
				Validators.pattern("[^ @]*@[^ @]*")
			])

		});

		//si le param id est renseigné il faut chercher le Utilisateur
		if (this.id) { //edit form
			this.clientService.getClientById(this.id).subscribe(
				client => {
					this.id = client.id;
					this.clientForm.patchValue({
						nom : client.nom,
						prenom:client.prenom,
						identifiant: client.identifiant,
						adresse: client.adresse,
						email: client.email,
						numTel: client.numTel,
						situation: client.situation,
						mdp: client.mdp

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
		console.log("test"+this.clientForm.valid);
		if (this.clientForm.valid) {
			if (this.id) {
				let client: Client = new Client(
        this.id, 
        this.clientForm.controls['nom'].value,
        this.clientForm.controls['prenom'].value,
        this.clientForm.controls['mdp'].value,
        this.clientForm.controls['email'].value,
        this.clientForm.controls['adresse'].value,
		this.clientForm.controls['identifiant'].value,
        this.clientForm.controls['numTel'].value,
        this.clientForm.controls['nbEnfants'].value,
		this.clientForm.controls['situation'].value,
        null,
        null,
        null,
        this.matriculeAgent);
  			this.clientService.modifierClient(client).subscribe(
				client => {
					this.client = client;
					console.log(client);
					this.refresh();

				},
				err => {
					console.log(err);
				}
  			);
			} 
		}
		this.clientForm.reset();
		//this.router.navigate(['/utilisateur'])
	}

	redirectUtilisateurPage() {
		this.router.navigate(['/clients']);
	}
	refresh() {
		this.clientService.getAllClient().subscribe(
				clients => {
					console.log ("GET ALL USER OK ");
					this.redirectUtilisateurPage();
				}
			);
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
