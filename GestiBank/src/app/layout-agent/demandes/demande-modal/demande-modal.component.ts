import { Component, OnInit,Input } from '@angular/core';
import { Demande } from '../../../../models';
import { Client } from '../../../../models';
import { DemandeService } from '../../../../services';
import { ClientService } from '../../../../services';
import { ActivatedRoute, Router } from  '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-demande-modal',
  templateUrl: './demande-modal.component.html',
  styleUrls: ['./demande-modal.component.scss'],
  providers: [DemandeService,ClientService]

})
export class DemandeModalComponent implements OnInit {

	id: number;
 	matriculeAgent: number;
	demande: Demande;
  closeResult: string;
	@Input() demandeEnCours : Demande;


  bgClass :string;
  icon:string;
  date:Date;
  label:string;
  typeD:string;

  constructor(private route: ActivatedRoute,
		private router: Router,
		private demandeService: DemandeService,
    private clientService:ClientService,
    private modalService: NgbModal) { }


	ngOnInit() { 
	  	this.id=this.demandeEnCours.idDemande;
      console.log("onInit" + this.demandeEnCours)
      this.bgClass='primary';
            this.icon='fa-comments';
		if (this.id) { //edit form

			this.demandeService.getDemandeById(this.id).subscribe(
				demande => {
					this.demande = demande;
          console.log(demande)
          this.idClientDemande(this.demande.idClient);
					if (true){
            
            this.date=this.demande.dateDemande;

          }
				},
				error => {
					console.log(error);
				}
			);
		}
	}
  
	idClientDemande(id:number){
    this.clientService.getClientById(this.demande.idClient).subscribe(
      client=>{
        console.log("test1 : "+client);
        this.label= "demande de : " + String(client.identifiant)
        console.log(this.label);
        this.typeD= "de Chéquier";
        console.log("test2 : "+ client);
        },
        error =>{
        console.log(error);
        }
      );
  }

	refresh() {
    window.location.reload();
	}

  	open(content) {
        console.log("open :" + this.demandeEnCours.dateDemande)
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

  validerDemande(){
     let demande: Demande = this.demandeEnCours;
     demande.status= false;
     this.demandeService.modifierDemande(demande).subscribe(
          demande => {
            this.demande = demande;
            console.log(demande);
          //  this.refresh();
          },
          err => {
          console.log(err);
          }
        );
  }
  
}
