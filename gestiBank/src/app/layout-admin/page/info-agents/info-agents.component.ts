import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Client} from  '../../../../models/client';
import { Agent} from   '../../../../models/agent';

import { AgentService} from '../../../../services/agent.service';
import { ClientService} from '../../../../services/client.service';

@Component({
  selector: 'app-info-agents',
  templateUrl: './info-agents.component.html',
  styleUrls: ['./info-agents.component.scss'],
  providers: [AgentService,ClientService],
})

export class InfoAgentsComponent implements OnInit {
  clients:     Client[] = [];
  agent :      Agent ;
  clientsTest :Client[] = [];
  agents :     Agent [] = [];
  client: Client [];
 

  id: number;
  private sub: any;
  matriculeAgent: string;
  public radioGroupForm: FormGroup;


  constructor(private agentService : AgentService,
              private clientService : ClientService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {}
      
   
  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
            model: 'middle'
        });
    // Recupération de l'id de l'agent
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });
    // Recuperation de l'agent avec l'id recupéré dans l url
    //
    this.getAgentByID(this.id);
    
    this.getAllAgents();
  }



  getAgentByID(id){
      this.agentService.getAgentById(id).subscribe(
         agent => {
              this.agent = agent;
              this.matriculeAgent = this.agent.matricule;
              this.getClientByAgent(this.matriculeAgent);
              //this.getClientByAgentBis(this.matriculeAgent);
         },
         err => {
           console.log(err);
         }

      );
   }

    getClientByAgent(matriculeAgent){
     this.clientService.getAllClient().subscribe(
       clients =>{
            for(let c of clients){
              if(c.matriculeAgent == matriculeAgent){
                this.clients.push(c);
                console.log(clients);
              }
            }
       },
       err => {
         console.log(err);
       })
   }

     getClientByAgentBis(matriculeAgent){
     this.clientService.getClientByMatriculeAgent(matriculeAgent).subscribe(
       clientsTest =>{
            for(let c1 of clientsTest){
                this.clientsTest.push(c1);
                console.log(this.clientsTest);
              }
            
       },
       err => {
         console.log(err);
       })
   }

   

   
   getAllAgents(){
      this.agentService.getAllAgents().subscribe(
         agents => {
           this.agents = agents;
         },
         err => {
           console.log(err);
         }

      );
  }

 
}
