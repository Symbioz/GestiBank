import { Injectable } from '@angular/core';
import { Notification } from "../models/notification";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class NotificationService {
	private apiUrl = 'http://localhost:8080/SpringAngularStartProject/';

	constructor(private http: Http) { }

	findClientNotifications(idClient: number): Observable<Notification[]> {
		return this.http.get(this.apiUrl + 'clients/'+ idClient + '/notifications')
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	deleteNotificationById(id: number): Observable<boolean> { 
		return this.http.delete(this.apiUrl + 'notifications/' + id) 
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}
