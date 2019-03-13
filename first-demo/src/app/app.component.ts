import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-demo';
  firstName: string = 'keyur';
  lastName: string = 'Thakor';
  constructor(){
    console.log("AppComponent Loaded...");
  }
}
