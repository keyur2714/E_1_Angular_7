import { Component, OnInit } from '@angular/core';
import { StudentService } from './services/student.service';
import { Student } from './model/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent implements OnInit{

  studentList: Student[] = [];

  title = 'HttpClientDemo';

  constructor(private studentService : StudentService){}

  ngOnInit(): void {
    this.studentService.getStudentList().subscribe(
      (data)=>{
        console.log(data);
        this.studentList = data;
      }
    )
  }
}
