import { Injectable } from '@angular/core';
import { Agent} from '../models/agent';
import { Adresse} from '../models/adresse';

@Injectable()
export class AgentService {

  agents: any[];

  constructor() {
    this.agents = this.agents[0];
   }



  

  getAgents(){
   this.agents = [new Agent(1337,"jennifer","Vincent", "vincentjenni@gmail.com", "0265989855", "test", new Adresse("rue de lille",59200,"lille")),
            new Agent(576,"jess", "vinc", "jess@fre.fr", "0154521545","test1",new Adresse("rue de lille",59200,"lille"))
  ];

  return this.agents;
}

  
}
