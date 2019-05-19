import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDetail } from '../auth/model/user-detail';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage : string = '';
  user : UserDetail = new UserDetail();

  constructor(private authenticationService : AuthenticationService,private router : Router) { }

  ngOnInit() {
  }

  login(frm : NgForm) : void {
    if(frm.valid){
      this.authenticationService.authenticate(this.user.userName,this.user.password).subscribe(
        (user : UserDetail)=>{
          alert(user);
         if(user){
            this.router.navigate([this.authenticationService.getSuccessUrl()]);
          }else{
            this.errorMessage = 'Invalid Username or Password.';
          }
        }
      )
    }
  }
}
