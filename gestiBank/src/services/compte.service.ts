import { Injectable } from '@angular/core';
import { Compte, CompteCourant, CompteRemunere } from "../models";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class CompteService {
	private apiUrl = 'http://localhost:8080/GestiBankBackEnd/client/:id/comptes';

	constructor(private http: Http) { }

	findClientComptes(id: number): Observable<Compte[]> {
		return this.http.get(this.apiUrl)
			.map((res:Response) => res.json())
			//.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

}