import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router:Router) { }

  user = {
    userName:"",
    password:""
  }
  ngOnInit(): void {
  }

  onSubmit(f : NgForm) {
    //console.log("login submit");
    //console.log("valid f: "+f.valid);
    this.auth.login(this.user).subscribe((data)=>{
      console.log("data::::: "+ JSON.stringify(data));
      if (data.token){
        this.auth.setToken(data.token);
      }
      this.router.navigate(["/posts"]);
    });
  }

}
