import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hobby } from '../models/hobby.model';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {
  private apiUrl = 'http://localhost:3000/api/hobbies';

  constructor(private http: HttpClient) { }

  getHobbies(): Observable<Hobby[]> {
    return this.http.get<Hobby[]>(this.apiUrl);
  }

  getHobbyById(id: string): Observable<Hobby> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Hobby>(url);
  }

  createHobby(hobby: Hobby): Observable<Hobby> {
    return this.http.post<Hobby>(this.apiUrl, hobby);
  }

  updateHobby(id: string, hobby: Hobby): Observable<Hobby> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Hobby>(url, hobby);
  }

  deleteHobby(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
