import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css']
})
export class CourseEntryComponent implements OnInit {

  courseEntryForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.createCourseForm();
  }

  createCourseForm(){
    this.courseEntryForm = new FormGroup(
      {
        courseName : new FormControl('',Validators.required),
        fees : new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')])
        //trainerName : new FormArray([new FormControl()])
      }
    );
  }

  saveCourse():void{
    console.log(this.courseEntryForm);
    console.log(this.courseEntryForm.value);
    console.log(this.courseEntryForm.get('courseName').value);
    console.log(this.courseEntryForm.get('fees').value);
  }
}
