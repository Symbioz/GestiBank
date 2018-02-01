import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Agent} from '../../../../models/agent';
import { Adresse}from '../../../../models/adresse';
import { AgentService} from '../../../../services/agent.service';


@Component({
  selector: 'app-gestion-agents',
  templateUrl: './gestion-agents.component.html',
  styleUrls: ['./gestion-agents.component.scss'],
  providers: [AgentService],
})

export class GestionAgentsComponent implements OnInit {
	
   agents: any[];

   constructor(private agentService: AgentService) {
      
   }


  ngOnInit() {
     this.agents = this.agentService.getAgents();
  }

   
  

  

}


