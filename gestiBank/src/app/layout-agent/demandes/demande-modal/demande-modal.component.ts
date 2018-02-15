import { Component, OnInit,Input } from '@angular/core';
import { Demande } from '../../../../models';

//import { ClientService } from '../../../../service/clientService';
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
		private clientService: ClientService,
    private modalService: NgbModal) { }


  ngOnInit() {
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
