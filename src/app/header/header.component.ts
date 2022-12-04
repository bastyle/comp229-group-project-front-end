import { Component, OnInit } from '@angular/core';
import { NavigationStart, Event, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus: any;
  constructor(private auth: AuthService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.loginStatus = this.auth.isAunthenticated();
        console.log("loginSTatus: "+this.loginStatus);        
      }
    })
  }

  ngOnInit(): void {
  }

  logout(){
    console.log("logout");
    this.auth.logout();
    this.router.navigate(["/"]);  
  }

}
