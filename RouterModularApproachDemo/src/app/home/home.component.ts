import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';
import { UserDetail } from '../auth/model/user-detail';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn : boolean = false;
  loggedInUser : UserDetail = new UserDetail();

  constructor(private authenticationService : AuthenticationService,private router : Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.getIsLoggedIn();
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));    
  }

  logout():void {
    this.authenticationService.isLoggedIn = false;
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    this.router.navigate(['/login']);
  }

}
