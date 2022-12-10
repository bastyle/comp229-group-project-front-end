import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  setToken(token: any, logedUser: any) {
    console.log("logedUser: "+logedUser[0]);
    console.log("logedUser: "+JSON.stringify(logedUser[0]));
    
    localStorage.setItem("access_token", token);
    localStorage.setItem("username", logedUser[0].username);
    localStorage.setItem("userId", logedUser[0]._id);
  }

  login(user: any): Observable<any> {
    //return this.http.post<any>("http://localhost:3000/api/login", user);
    return this.http.post<any>("https://comfortable-boa-pea-coat.cyclic.app/api/login", user);
  }

  getUser():any{
    return {"username":localStorage.getItem("username"),"id":localStorage.getItem("userId")};
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
