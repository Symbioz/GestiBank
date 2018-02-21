import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/observable'
import { Agent} from '../models/agent';


@Injectable()
export class AgentService {
   
  //private apiUrl ='http://localhost:8080/GestiBankBackEnd/agents/';
  private apiUrl ='http://localhost:8080/SpringAngularStartProject/agents/';
  constructor(private http: Http) { }

 
  getAllAgents(): Observable<Agent[]>{
    return this.http.get(this.apiUrl)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw (error.json || 'server error'));
  }

  supprimerAgent(id:number): Observable<boolean>{
     return this.http.delete(this.apiUrl + id)
     .map((res:Response) => res.json())
     .catch((error:any) => Observable.throw (error.json || 'server error'));
  }
      
 
  creerAgent(agent : Agent): Observable<Agent> {
      return this.http.post(this.apiUrl, agent)
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }


   modifierAgent(agent : Agent): Observable<Agent> {
    return this.http.put(this.apiUrl,agent)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getAgentById(id: number): Observable<Agent> { 
    return this.http.get(this.apiUrl + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
   }

 
}
  
