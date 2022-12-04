import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataManagerService } from '../data-manager.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private dataManager: DataManagerService) { }

  registeredUser = new User();

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log("submit...");    
    console.log(this.registeredUser.username);
    this.dataManager.addUser(this.registeredUser).subscribe((userDetail)=>{
      console.log("userDetail: "+userDetail);       
    });
  }

}
