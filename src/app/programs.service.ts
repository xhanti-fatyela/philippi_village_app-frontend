import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programs } from './programs';

const baseUrl = 'http://localhost:3200/api/programs';

let token = window.sessionStorage.getItem('auth-token')

let httpOptions = {
  headers: new HttpHeaders({ 'x-access-token': `${token}` })
};

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Programs[]> {
    return this.http.get<Programs[]>(baseUrl + "/all", httpOptions );
  }

  get(id: string | null): Observable<Programs> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data, httpOptions);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Programs[]> {
    return this.http.get<Programs[]>(`${baseUrl}?title=${title}`);
  }
}
