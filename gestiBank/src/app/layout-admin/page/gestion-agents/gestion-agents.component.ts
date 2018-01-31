import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Agent} from '../../../../models/agent';
import { Adresse}from '../../../../models/adresse';
import { AgentService} from '../../../../services/agent.service';


@Component({
  selector: 'app-gestion-agents',
  templateUrl: './gestion-agents.component.html',
  styleUrls: ['./gestion-agents.component.scss']
})

export class GestionAgentsComponent implements OnInit {
	/*agents = [new Agent(1337,"jennifer","Vincent", "vincentjenni@gmail.com", "0265989855", "test", new Adresse("rue de lille",59200,"lille")),
	          new Agent(576,"jess", "vinc", "jess@fre.fr", "0154521545","test1",new Adresse("rue de lille",59200,"lille"))
	];*/

   constructor() {
       }

  ngOnInit() {
  }

  //agents = this.agentService.getAgents;
}


