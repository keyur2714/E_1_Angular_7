import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CCInputDemo';

  myMessage: string = 'How Are You?';

  messageList: string [] = [
    "Hi",
    "Hello",
    "Good Morning..!",
    "Good Afternoon..!",
    "Good Evening..!"
  ];
}
