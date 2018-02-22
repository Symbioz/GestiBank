import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../../../models';
import { ClientService } from '../../../../services';
import { ActivatedRoute, Router } from  '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-nouveau-client-modal',
  templateUrl: './nouveau-client-modal.component.html',
  styleUrls: ['./nouveau-client-modal.component.scss']
})
export class NouveauClientModalComponent implements OnInit {


 	matriculeAgent: string;
	client: Client;
	nouveauClientForm: FormGroup;
	private sub: any;
  	closeResult: string;
 



  constructor(private route: ActivatedRoute,
		private router: Router,
		private clientService: ClientService,
    private modalService: NgbModal) { }

	ngOnInit() { 
		this.nouveauClientForm = new FormGroup({
			nom : new FormControl('', Validators.required),
			prenom : new FormControl('', Validators.required),
			identifiant: new FormControl('', Validators.required),
			adresse: new FormControl('', Validators.required),
			email: new FormControl('', [
				Validators.required, 
				Validators.pattern("[^ @]*@[^ @]*")
			]),
			numTel : new FormControl('', Validators.required),
			nbEnfants :new FormControl('', Validators.required),
			situation : new FormControl('', Validators.required),
			mdp :new FormControl('', Validators.required)


		});
	}


	onSubmit() {
		console.log("test"+this.nouveauClientForm.valid);
		if (this.nouveauClientForm.valid) {

				let client: Client = new Client(
        0, 
        this.nouveauClientForm.controls['nom'].value,
        this.nouveauClientForm.controls['prenom'].value,
        this.nouveauClientForm.controls['mdp'].value,
        this.nouveauClientForm.controls['email'].value,
        this.nouveauClientForm.controls['adresse'].value,
		this.nouveauClientForm.controls['identifiant'].value,
        this.nouveauClientForm.controls['numTel'].value,
        this.nouveauClientForm.controls['nbEnfants'].value,
		this.nouveauClientForm.controls['situation'].value,
        null,
        null,
        null,
        this.matriculeAgent);
  			this.clientService.saveClient(client).subscribe(
				client => {
					this.client = client;
					console.log(client);
				//	this.refresh();

				},
				err => {
					console.log(err);
				}
  			);
			
		}
		//this.nouveauClientForm.reset();
		//this.router.navigate(['/agent/clients'])
	}

/*	redirectClientPage() {
		this.router.navigate(['/agent']);
		this.router.navigate(['/agent/clients']);
	}*/
	
	refresh() {
		/*this.clientService.getAllClient().subscribe(
				clients => {
					console.log ("GET ALL USER OK ");
					this.redirectClientPage();
				}
			);*/
    window.location.reload();
	}

  open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
            this.refresh();
            console.log("refresh1");
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            this.refresh();
            console.log("refresh2");
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
