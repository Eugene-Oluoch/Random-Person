import { Injectable } from '@angular/core';
import { Result } from '../app/Results';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  getFile: string = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) {
  }
  getUsers(): Observable<Result>{
    return this.http.get<Result>(this.getFile);
  }

}
