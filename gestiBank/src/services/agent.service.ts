import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/observable'
import { Agent} from '../models/agent';

import { Client}  from '../models/client';

@Injectable()
export class AgentService {
  
  agents = [new Agent( 3,"nom","prenom", "identifiant","mdp","email","adresse", 888, new Date(),new Date()), 
            new Agent( 1,"Vincent","jennifer", "login","222", "vincentjenni@gmail.com", "rue de lille 59200 lille", 1337,new Date(),new Date()),
            new Agent( 2,"Vinc", "jess","login2", "111", "jes@fre.fr", "rue de lille 59200 ", 573, new Date(),new Date())
     ];


  private apiUrl ='http://localhost:8080/GestiBankBackEnd/agents';

  constructor(private http: Http) {
   
   }

  // Fonction de recupération des agents
  getAgents(){
     return this.agents;
  }

  //Fonction qui recupère un agent avec son id (pour le moment avec son matricule car oublier de mettre un
  //id pour l'uilitsateur)
 
 
  getAgent(id) {
    for(let agent of this.agents){
      if(agent.matricule ===id){
        return agent;
      }
    }
  } 

  findAll(): Observable<Agent[]>{
    return this.http.get(this.apiUrl)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw (error.json || 'server error'));
  }

  /*saveAgent(agent : Agent): Observable<Agent> {
      console.log("service");
      return this.http.post(this.apiUrl, agent)
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
      

  }*/

   saveAgent(agent: Agent){
      this.agents.push(agent);
      console.log(('service save'));
      console.log(this.agents);
   }

   deleteAgentById(agent: Agent){
      console.log("delete" );
      // A modifier trouver l id de l agent
      //this.agents.splice(1,1);
      this.agents.splice(this.agents.indexOf(agent), 1);
   }

   

 

  
}
  
