import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Agent} from '../../../../models/agent';
import { AgentService} from '../../../../services/agent.service';
import { Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


@Component({
  selector: 'app-gestion-agents',
  templateUrl: './gestion-agents.component.html',
  styleUrls: ['./gestion-agents.component.scss'],
  providers: [AgentService],
})

export class GestionAgentsComponent implements OnInit {
	
   private agents : Agent[];
   
   constructor(
     private agentService: AgentService
     ) {}


  ngOnInit() {
      this.getAllAgents();
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


