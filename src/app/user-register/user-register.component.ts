import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  constructor() { }

  registeredUser = new User();

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log("submit...");
    
    // this.registeredUser.username = form.value.username;
    // this.registeredUser.password = form.value.password;
    // this.registeredUser.email = form.value.email;
    // this.registeredUser.fullName = form.value.fullName;

    console.log(this.registeredUser.username);
  }

}
