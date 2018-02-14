import { Component, OnInit,Input, OnDestroy  } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { Agent} from '../../../../../models/agent';
import { Client} from '../../../../../models/client';
import {GestionAgentsComponent} from '../../gestion-agents/gestion-agents.component';
import { Router, ActivatedRoute} from '@angular/router';



import { AgentService} from '../../../../../services/agent.service';
import { ClientService} from '../../../../../services/client.service';

@Component({
  selector: 'app-bouton-suppression-agents',
  templateUrl: './bouton-suppression-agents.component.html',
  styleUrls: ['./bouton-suppression-agents.component.scss']
})
export class BoutonSuppressionAgentsComponent implements OnInit {
    
    private sub:any;
    private id: number;
    agent: Agent;
    closeResult: string;
    constructor(private modalService: NgbModal,
                private agentService: AgentService,
                private clientService: ClientService,
                private gestionAgentComponent: GestionAgentsComponent,
                private router:Router,
                private route: ActivatedRoute) { }
    
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

    supprimerAgent(agent: Agent){
    if (agent) {
      this.agentService.supprimerAgent(agent.id).subscribe(
        res => {
           this.gestionAgentComponent.getAllAgents();
           this.router.navigate(['/agent']);
        })
    }
  }

   ngOnInit() { 
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];
      });

   

  // A supprimer
  /*deleteAgentById(this.id){
       let agent: Agent = this.agentService.getAgent(id);
       console.log(agent.matricule);
       this.agentService.deleteAgentById(agent);
  }*/

  




}
