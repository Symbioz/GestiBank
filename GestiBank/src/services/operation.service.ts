import { Injectable } from '@angular/core';
import { Operation } from "../models";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class OperationService {

	private apiUrl = 'http://localhost:8080/SpringAngularStartProject/comptes/';

	constructor(private http: Http) { }

	findClientOperations(iBAN: string): Observable<Operation[]> {
		return this.http.get(this.apiUrl + iBAN + '/operations')
			.map((res:Response) => res.json())
			//.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	
}