import { Injectable } from '@angular/core';
import { Notification } from "../models/notification";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class NotificationService {
	private apiUrl = 'http://localhost:8080/GestiBankBackEnd/notifications';

	constructor(private http: Http) { }

	findAll(): Observable<Notification[]> {
		return this.http.get(this.apiUrl)
			.map((res:Response) => res.json())
			//.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	deleteNotificationById(id: number): Observable<boolean> { 
		return this.http.delete(this.apiUrl + id) 
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}
