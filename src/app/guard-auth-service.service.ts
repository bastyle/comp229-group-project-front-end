import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthServiceService {

  constructor(private auth: AuthService, private router:Router) { }

  canActivate(): boolean {

    if(! this.auth.isAunthenticated()){
      this.router.navigate(["/login"]);
      return false;
    }
    return true;
  }
}
