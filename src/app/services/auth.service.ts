import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(`${this.baseUrl}/login`, data)
      .pipe(map(result => {
        localStorage.setItem('authUser', JSON.stringify(result));
        return result;
      }));
  }

  register(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  profile() {
    return this.http.get(`${this.baseUrl}/user`);
  }

  getAuthUser() {
    return JSON.parse(localStorage.getItem('authUser') as string);
  }

  get isLoggedIn() {
    if (localStorage.getItem('authUser')) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('authUser');
  }
}
