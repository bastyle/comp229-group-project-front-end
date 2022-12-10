import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataManagerService } from '../data-manager.service';
import { User } from '../model/user';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataManager: DataManagerService, private router: Router) { }

  registeredUser = new User();
  popUpMessage = "";
  validForm = false;

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.validForm = form.form.valid;
    console.log("submit..." + form.form.valid);
    if (!form.valid) {
      this.openPopup("Please complete the form.");
      return;
    }
    //return;
    console.log(this.registeredUser.username);
    this.dataManager.addUser(this.registeredUser).subscribe((userDetail) => {
      console.log("userDetail: " + JSON.stringify(userDetail));
      //message ?
      if (userDetail.success === true) {
        this.openPopup("User account Successfully created.");
      } else if (userDetail.msg != "" && userDetail.msg.code=="11000") {
        this.validForm = false;
        this.openPopup("Username already exist in the system.");
      } else{
        this.validForm = false;
        this.openPopup("Error trying create new account. code: "+ JSON.stringify(userDetail.msg.code));
      }

      //this.router.navigate(["/login"]);
    });
  }
  displayStyle = "none";

  openPopup(message) {
    this.displayStyle = "block";
    this.popUpMessage = message;
  }
  closePopup() {
    this.displayStyle = "none";
    if (this.validForm)
      this.router.navigate(["/login"]);
  }
}
