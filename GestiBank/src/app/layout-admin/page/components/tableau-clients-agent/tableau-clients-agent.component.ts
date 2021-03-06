import { Component, OnInit,Input } from '@angular/core';
import {Client} from '../../../../../models/client';
import {Agent} from '../../../../../models/agent';
import { FormsModule } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import {ClientService} from './../../../../../services/client.service';
import {AgentService} from './../../../../../services/agent.service';

@Component({
  selector: 'app-tableau-clients-agent',
  templateUrl: './tableau-clients-agent.component.html',
  styleUrls: ['./tableau-clients-agent.component.scss'],
  providers: [ClientService, AgentService]
})
export class TableauClientsAgentComponent implements OnInit {

  @Input() ListeClients:Client[];
  @Input() ListeAgents:Agent[];


  client: Client;
  agent : Agent;
  clientUpdate: Client;
  agentUpddate: Agent;
  idclient: number;
  clientAdd: Client[];

  closeResult: string;
  
    constructor(private modalService: NgbModal,
                private clientService: ClientService,
                private agentSerice: AgentService) { }
    
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
            this.refresh();
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            this.refresh();
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

     /*affecter(idClient){
       console.log(this.agent);

       console.log(idClient);

       this.clientService.getClientById(idClient).subscribe(
        client => {
          console.log(client);
          this.modifierClient(client,this.agent);
        },
        error => {
          console.log(error);
        }
      );

    }*/

    affecter(agentid,client){
        
       this.agentSerice.getAgentById(agentid).subscribe(
        agentRecup => {
           console.log(client);
             
          //console.log(agentRecup);
          //console.log(agentRecup.clients);
          this.clientAdd = agentRecup.clients;
          console.log(this.clientAdd);
           this.clientAdd.push(client);
           console.log(this.clientAdd);
          this.modifierAgent(agentRecup,this.clientAdd)

        },
        error => {
          console.log(error);
        }
      );
    }

   selectAgent(agent: Agent):void {
      this.agent = agent;
      console.log(agent);
      
    }

    /*modifierClient(client,agent){
          
      let clientUpdate : Client = new Client(
        client.id,
        client.nom,
        client.prenom,
        client.mdp,
        client.email,
        client.adresse,
        client.identifiant,
        client.numTel,
        client.nbEnfants,
        client.situation,
        client.comptes,
        client.documents,
        client.notifications,
        //client.matriculeAgent ="573"
        agent)
      console.log(clientUpdate);

      this.clientService.modifierClient(clientUpdate).subscribe(
               clientUpdate => {
                this.clientUpdate = clientUpdate;
                  console.log(clientUpdate);
                  
                         },
                err => {
                  console.log(err);
              }
           );
    }*/

    modifierAgent(agent,clientAdd){
          console.log(this.agent);
          
      let agentUpdate : Agent = new Agent(
        agent.id,
        agent.nom,
        agent.prenom,
        agent.mdp,
        agent.email,
        agent.adresse,
        agent.identifiant,
        agent.numTel,
        agent.matricule,
        agent.dateDebutContrat,
        //null
        this.clientAdd
        //this.client
        )
       
      this.agentSerice.modifierAgent(agentUpdate).subscribe(
               agentUpdate => {
                   this.agentUpddate =agentUpdate;
                  console.log(agentUpdate);
                         },
                err => {
                  console.log(err);
              }
           );
    }

     refresh() {
    
    window.location.reload();
  }



  ngOnInit() {

  	
  }

}
