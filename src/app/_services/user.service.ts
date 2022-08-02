import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:3200/api/test/';

let token = window.sessionStorage.getItem('auth-token')

let httpOptions = {
  headers: new HttpHeaders({ 'x-access-token': `${token}` })
};

@Injectable({
  providedIn: 'root'})export class UserService {
  constructor(private http: HttpClient) { }
  getPublicContent():
   Observable<any> {
    return this.http.get(API_URL + 'all',
     { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', 
    { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', 
    { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { headers: httpOptions.headers, responseType: 'text'} );
  }}
