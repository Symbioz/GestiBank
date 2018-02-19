import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

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
  clients: Client[] =[];
  client:  Client[] =[];
  agent :  Agent [] =[];

  id: number;
  private sub: any;

  constructor(private agentService : AgentService,
              private clientService : ClientService,
              private route: ActivatedRoute) {}
      
   
  ngOnInit() {
    // this.agents = this.agentService.getAgents();
    // this.client = this.clientService.getClients();

    // Recupération de l'id de l'agent
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });


    this.agentService.getAgentById(this.id);
    console.log(this.getClientByAgentid(this.id));


   
    //console.log(this.agentService.getAgentById(this.id));
  }

  getAgentsByID(id){

      this.agentService.getAgentById(id).subscribe(
         agent => {
             //this.agent= agent;
         },
         err => {
           console.log(err);
         }

      );
   }

   getClientByAgentid(id){
     this.clientService.getAllClient().subscribe(
       clients =>{
            for(let c of clients){
              if(c.matriculeAgent == this.id){
                this.client.push(c);
                console.log(c);
              }
            }
       },
       err => {
         console.log(err);
       })
   }


 
}
