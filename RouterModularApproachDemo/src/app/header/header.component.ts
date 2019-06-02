import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  isLoggedIn : boolean= false;

  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit() {    
  }

}
