import { Injectable, OnInit } from '@angular/core';
import { interfaceCliente } from './interfaceCliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ManagerService implements OnInit {

  private apiUrl = 'http://localhost:3000/users';
  public userInfo: any;

  constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  remove(id: number) {
    return this.http.delete<interfaceCliente>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<interfaceCliente[]> {
    return this.http.get<interfaceCliente[]>(this.apiUrl);
  }

  getItem(id: number): Observable<interfaceCliente> {
    return this.http.get<interfaceCliente>(`${this.apiUrl}/${id}`)
  }
  
  addUser(data:interfaceCliente): Observable<interfaceCliente[]> {
    return this.http.post<interfaceCliente[]>(this.apiUrl, data);
  }
}
