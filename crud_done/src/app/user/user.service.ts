import { User } from './../interface/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:3000/users/'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<User[]>(this.url)
  }

  setData(usuario: User) {
    return this.http.post<User>(this.url, usuario, this.httpOptions)
  }

  deleteData(byId: Number){
    return this.http.delete(this.url + byId)
  }
}
