import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
//import {Agents} from '../../../page/gestion-agents/agents';
import { CreerAgentsComponent } from './creer-agents.component';

@Component({
  selector: 'app-bouton-creation-agents',
  templateUrl: './bouton-creation-agents.component.html',
  styleUrls: ['./bouton-creation-agents.component.scss']
})
export class BoutonCreationAgentsComponent  {

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
    

 
}
