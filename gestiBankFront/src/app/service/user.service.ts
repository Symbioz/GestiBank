import { Injectable } from '@angular/core';
import { User} from '../modele/user';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Observable} from 'rxjs/observable'


@Injectable()
export class UserService {
  

  private apiUrl ='http://localhost:8080/GestiBankBackEnd/users';

  constructor(private http: Http) { }

  findAll(): Observable<User[]>{
  	return this.http.get(this.apiUrl)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw (error.json || 'server error'));
  }

  findById(id: number): Observable<User> {
         return this.http.get(this.apiUrl + '/' + id)
         .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw (error.json || 'server error'));
  }

  saveUser(user : User): Observable<User> {
      return this.http.post(this.apiUrl, user)
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));

  }

  deleterUserById(id: number): Observable<boolean> {return null;}

  updateUser(user : User): Observable<User> {
      return this.http.put(this.apiUrl + '/' + user.id, user)
         .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw (error.json || 'server error'));

  }
}
