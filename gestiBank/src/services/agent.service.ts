import { Injectable } from '@angular/core';
import { Agent} from '../models/agent';
import { Adresse} from '../models/adresse';

@Injectable()
export class AgentService {

  //agents: any[];
  agents = [new Agent(1337,"jennifer","Vincent", "vincentjenni@gmail.com", "0265989855", "test", new Adresse("rue de lille",59200,"lille")),
            new Agent(576,"jess", "vinc", "jess@fre.fr", "0154521545","test1",new Adresse("rue de lille",59200,"lille"))
     ];

  constructor() {
   
   }

  // Fonction de recupération des agents
  getAgents(){
      
     return this.agents;
}
   
   //Fonction d'ajout d'un agent
   addAgent(){

   }


   //Fonction d'édition d'un agent
   editAgent(){

   }


   //Fonction de suppression d'un agent
   deleteAgent(){

   }

  
}
