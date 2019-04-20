import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Course } from '../inquiry-entry/course.model';

@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css']
})
export class CourseEntryComponent implements OnInit {

  courseEntryForm : FormGroup;
  isCourseCreated : boolean = false;  
  courseTrainerList : Course[] = [];

  constructor() { }

  ngOnInit() {
    this.createCourseForm();
  }

  createCourseForm(){
    this.courseEntryForm = new FormGroup(
      {
        courseName : new FormControl('',Validators.required),
        fees : new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),
        trainersName : new FormArray([new FormControl()])
      }
    );
  }

  saveCourse():void{
    console.log(this.courseEntryForm);
    console.log(this.courseEntryForm.value);
    console.log(this.courseEntryForm.get('courseName').value);
    console.log(this.courseEntryForm.get('fees').value);
    console.log(this.courseEntryForm.get('trainersName').value);
    if(this.courseEntryForm.valid){
      this.isCourseCreated = true;
      const courseName = this.courseEntryForm.get('courseName').value;
      const fees = this.courseEntryForm.get('fees').value
      for(let trainer of this.courseEntryForm.get('trainersName').value){
        const newCourse = new Course();
        newCourse.courseName = courseName;
        newCourse.fees = fees;
        newCourse.trainerName = trainer;
        this.courseTrainerList.push(newCourse);
      }
    }
  }

  addNewTrainer():void{
    let newTrainerControl = new FormControl();
    (<FormArray>this.courseEntryForm.get("trainersName")).push(newTrainerControl); 
  }

  checkFeesValidation():void{
    const courseName:string = this.courseEntryForm.get('courseName').value;
    if(courseName.toUpperCase() === 'DEMO') {
      this.courseEntryForm.get('fees').clearValidators();
    }else{
      this.courseEntryForm.get('fees').setValidators([Validators.required,Validators.pattern('^[0-9]+$')])      
    }
    this.courseEntryForm.get('fees').updateValueAndValidity;
    this.courseEntryForm.updateValueAndValidity;
  }
  updateValidationMsg():void{
    this.courseEntryForm.get('fees').clearValidators();
    this.courseEntryForm.updateValueAndValidity;
  }
}
