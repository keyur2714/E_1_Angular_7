import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService } from '../services/student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  newStudent : Student = new Student();
  studentList: Student[] = [];
  statusCode : number = 0;
  isUpdate : boolean = false;

  constructor(private studentService : StudentService) { }

  ngOnInit() {
    this.getStudentList();
  }

  getStudentList():void{
    this.studentService.getStudentList().subscribe(
      (data: Student[])=>{
        console.log(data);
        this.studentList = data;
      }
    )
  }

  save(frm: NgForm):void {
    if(frm.valid){
      this.studentService.save(this.newStudent).subscribe(
        (data: Student)=>{
          this.statusCode = 201;
          this.getStudentList();
        }
      )
    }
  }

  update():void {
      this.studentService.update(this.newStudent).subscribe(
        (data: Student)=>{
          this.statusCode = 204;
          this.getStudentList();
          this.isUpdate = false;
        }
      )    
  }


  edit(id : number):void {
    this.studentService.getStudentById(id).subscribe(
      (data: Student)=>{
        this.isUpdate = true;
        this.newStudent = data;
      }
    )
  }

  delete(id : number):void {
    let confirmMsg = confirm("Are you sure want to delete?");
    if(confirmMsg){
      this.studentService.deleteStudentById(id).subscribe(
        (data)=>{
          this.statusCode = 203;
          this.getStudentList();
        }
      )      
    }
  }
}
