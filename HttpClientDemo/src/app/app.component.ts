import { Component, OnInit } from '@angular/core';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent implements OnInit{

  

  title = 'HttpClientDemo';

  constructor(){}

  ngOnInit(): void {
    
  }
}
