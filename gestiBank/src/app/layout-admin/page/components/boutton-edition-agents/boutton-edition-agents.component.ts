import { Component, OnInit,Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import {Agent} from '../../../../../models/agent';

@Component({
  selector: 'app-boutton-edition-agents',
  templateUrl: './boutton-edition-agents.component.html',
  styleUrls: ['./boutton-edition-agents.component.scss']
})
export class BouttonEditionAgentsComponent implements OnInit {

    closeResult: string;
    
    constructor(private modalService: NgbModal) { }

    @Input() agentModal:Agents;
    
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

  ngOnInit() {
  }

}
