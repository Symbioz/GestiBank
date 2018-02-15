import { Injectable } from '@angular/core';
import { Utilisateur } from "../models";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable } from "rxjs/Observable";

@Injectable()
export class UtilisateurService {
	private apiUrl = 'http://localhost:8080/GestiBankBackEnd/utilisateurs/';

	constructor(private http: Http) { }

	findAll(): Observable<Utilisateur[]> {
		return this.http.get(this.apiUrl)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	findById(id: number): Observable<Utilisateur> { 
		return this.http.get(this.apiUrl + id)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Error'));
	}

	saveUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> { 
		return this.http.post(this.apiUrl, utilisateur)
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	deleteUtilisateurById(id: number): Observable<boolean> { 
		return this.http.delete(this.apiUrl + id) 
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	updateUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
		return this.http.put(this.apiUrl + utilisateur.id, utilisateur)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}
