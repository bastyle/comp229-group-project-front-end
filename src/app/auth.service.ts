import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  setToken(token: any) {
    localStorage.setItem("access_token", token);

  }

  login(user: any): Observable<any> {
    // http://localhost:8080/api/login
    return this.http.post<any>("https://comfortable-boa-pea-coat.cyclic.app/api/login", user);
  }

  getToken() {
    return localStorage.getItem("access_token");
  }

  logout() {
    console.log("logout: AuthService");
    localStorage.removeItem("access_token");
  }

  isAunthenticated(): boolean {
    const token = this.getToken();
    return token ? true : false;
  }
}
