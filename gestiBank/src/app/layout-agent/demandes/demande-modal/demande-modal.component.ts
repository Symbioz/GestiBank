import { Component, OnInit,Input } from '@angular/core';
import { Demande } from '../../../../models';

import { DemandeService } from '../../../../service/demandeService';
import { ActivatedRoute, Router } from  '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-demande-modal',
  templateUrl: './demande-modal.component.html',
  styleUrls: ['./demande-modal.component.scss']

})
export class DemandeModalComponent implements OnInit {

	id: number;
 	matriculeAgent: number;
	demande: Demande;
	clientForm: FormGroup;
  	closeResult: string;
	@Input() demandeEnCours : Demande;

  constructor(private route: ActivatedRoute,
		private router: Router,
		private demandeService: DemandeService,
    private modalService: NgbModal) { }


	ngOnInit() { 
		  	this.id=this.demandeEnCours.idDemande;

		//si le param id est renseigné il faut chercher le Utilisateur
		if (this.id) { //edit form
			this.demandeService.getDemandeById(this.id).subscribe(
				demande => {
					this.id = demande.idDemande;
					
				},
				error => {
					console.log(error);
				}
			);
		}
	}
	

	refresh() {
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
