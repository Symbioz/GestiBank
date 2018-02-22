import { Injectable } from '@angular/core';
import { Demande } from "../models/demande";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable } from "rxjs/Observable";

@Injectable()
export class DemandeService {
  private apiUrl = 'http://localhost:8080/SpringAngularStartProject/demandes/';

  constructor(private http: Http) { }

  getAllDemandes(): Observable<Demande[]> {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getDemandeById(id: number): Observable<Demande> { 
    return this.http.get(this.apiUrl + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  saveDemande(demande: Demande): Observable<Demande> { 
    return this.http.post(this.apiUrl, demande)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteDemandeById(id: number): Observable<boolean> { 
    return this.http.delete(this.apiUrl + id) 
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  modifierDemande(demande: Demande): Observable<Demande> {
    return this.http.put(this.apiUrl, demande)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}



