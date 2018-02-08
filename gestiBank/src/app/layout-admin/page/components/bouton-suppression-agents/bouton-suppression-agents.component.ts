import { Component, OnInit,Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { Agent} from '../../../../../models/agent';
import { Client} from '../../../../../models/client';



import { AgentService} from '../../../../../services/agent.service';
import { ClientService} from '../../../../../services/client.service';

@Component({
  selector: 'app-bouton-suppression-agents',
  templateUrl: './bouton-suppression-agents.component.html',
  styleUrls: ['./bouton-suppression-agents.component.scss']
})
export class BoutonSuppressionAgentsComponent implements OnInit {

    closeResult: string;
    constructor(private modalService: NgbModal,
                private agentService: AgentService,
                private clientService: ClientService) { }
    
    @Input() agentModal:Agent;
    @Input() ListeClients:Client[];
     
  



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

  deleteAgentById(id){
       let agent: Agent = this.agentService.getAgent(id);
       console.log(agent.matricule);
       this.agentService.deleteAgentById(agent);
  }

 

}
