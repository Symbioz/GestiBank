import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Client} from  '../../../../models/client';
import { Agent} from   '../../../../models/agent';
import { Adresse} from '../../../../models/adresse';
import { AgentService} from '../../../../Services/agent.service';
import { ClientService} from '../../../../Services/client.service';

@Component({
  selector: 'app-info-agents',
  templateUrl: './info-agents.component.html',
  styleUrls: ['./info-agents.component.scss'],
 // providers: [AgentService,ClientService],
})

export class InfoAgentsComponent implements OnInit {
  client:any[];
  agents: any[];

  //constructor(private agentService: AgentService, private clientService: ClientService) {
      
   
  ngOnInit() {
    // this.agents = this.agentService.getAgents();
    // this.client = this.clientService.getClients();
  }
 
}
