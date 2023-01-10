import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { USERS } from './USERS';

@Injectable({
 providedIn: 'root'
})

export class UserService {

 private url = 'http://localhost:3000';

 constructor( private http: HttpClient ) { }

 getPeople(): Observable<USERS[]> {
  return this.http.get<USERS[]>(this.url + '/users');
 }


 addUser(users: Usuario): Observable<Usuario> {
  const headers = {'content-type': 'application-json'}
  const body = JSON.stringify(users);
  console.log(body)
  return this.http.post<Usuario>(this.url + '/users', body,{'headers':headers});
  // return this.http.post<Usuario>(this.url, users)
 }
 saveUserTyped(user: Usuario): Observable<Usuario> {
  return this.http.post<Usuario>(this.url, user);
}
}
