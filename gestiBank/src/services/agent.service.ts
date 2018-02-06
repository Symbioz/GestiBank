import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/observable'
import { Agent} from '../models/agent';
import { Adresse} from '../models/adresse';

@Injectable()
export class AgentService {

  agents = [new Agent(1337, "date","jennifer","Vincent", "vincentjenni@gmail.com", "0265989855", "test", new Adresse("rue de lille",59200,"lille")),
            new Agent(576,"dare","jess", "vinc", "jess@fre.fr", "0154521545","test1",new Adresse("rue de lille",59200,"lille"))
     ];

   private apiUrl ='http://localhost:8080/GestiBankBack/agent';

  constructor(private http: Http) {
   
   }

  // Fonction de recupération des agents
  getAgents(){
      
     return this.agents;
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
    


}
  
