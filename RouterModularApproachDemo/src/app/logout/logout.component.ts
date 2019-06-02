import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService,private router : Router) { }

  ngOnInit() {
    this.authenticationService.isLoggedIn = false;
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    this.authenticationService.successUrl = 'home';
    this.router.navigate(['/login']);
  }

}
