import { Component, OnInit,Input } from '@angular/core';
import {Demande} from '../../../../../models/demande';
import {Agent} from '../../../../../models/agent';
import {Inscription} from '../../../../../models/inscription';
import { FormsModule } from '@angular/forms';


import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tableau-demande-compte',
  templateUrl: './tableau-demande-compte.component.html',
  styleUrls: ['./tableau-demande-compte.component.scss']
})
export class TableauDemandeCompteComponent implements OnInit {
  
@Input() ListeDemande:Demande[];
@Input() ListeInscription: Inscription[]
@Input() ListeAgents:Agent[];

agents : Agent;

//Inssertion Modale
closeResult: string;
  
    constructor(private modalService: NgbModal) { }
    
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

     affecter(selectedAgent){
      console.log(selectedAgent);
    }

   selectAgent(cpt: Agent):void {
      this.agents = cpt;
      console.log(this.agents);
    }



  

  ngOnInit() {
  }

}
