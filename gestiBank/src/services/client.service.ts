import { Injectable } from '@angular/core';
import { Client}  from '../models/client';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable } from "rxjs/Observable";

@Injectable()
export class ClientService {
  //private apiUrl = 'http://localhost:8080/GestiBankBackEnd/client/';
  private apiUrl ='http://localhost:8080/SpringAngularStartProject/client/';
  constructor(private http: Http) { }

  getAllClient(): Observable<Client[]> {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getClientById(id: number): Observable<Client> { 
    return this.http.get(this.apiUrl + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  saveClient(client: Client): Observable<Client> { 
    return this.http.post(this.apiUrl, client)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteClientById(id: number): Observable<boolean> { 
    return this.http.delete(this.apiUrl + id) 
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  modifierClient(client: Client): Observable<Client> {
    return this.http.put(this.apiUrl, client)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getClientByMatriculeAgent(matriculeAgent: string): Observable<Client[]> { 
    return this.http.get(this.apiUrl + 'agent/'+matriculeAgent)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }
}

