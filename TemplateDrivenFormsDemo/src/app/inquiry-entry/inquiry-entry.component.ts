import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { Inquiry } from './inquiry.model';

@Component({
  selector: 'app-inquiry-entry',
  templateUrl: './inquiry-entry.component.html',
  styleUrls: ['./inquiry-entry.component.css']
})
export class InquiryEntryComponent implements OnInit {

  isInquiryCreated : boolean = false;
  courseList: Course[]=[];
  newInquiry : Inquiry = new Inquiry();

  constructor() { }

  ngOnInit() {
    let course1 = new Course();
    course1.id = 10;
    course1.courseName = "Angular";
    course1.fees = 12000;
    course1.trainerName = "Keyur";

    let course2 = new Course();
    course2.id = 20;
    course2.courseName = "Java";
    course2.fees = 8000;
    course2.trainerName = "denish";

    let course3 = new Course();
    course3.id = 30;
    course3.courseName = "Python";
    course3.fees = 7000;
    course3.trainerName = "Jay";

    this.courseList.push(course1);
    this.courseList.push(course2);
    this.courseList.push(course3);
  }

  save(inquiryEntry):void{
    console.log(inquiryEntry);
    console.log(inquiryEntry.value);
    console.log(inquiryEntry.controls["name"].value);
    console.log(inquiryEntry.controls["email"].value);
    console.log(inquiryEntry.controls["mobileNo"].value);
    console.log(inquiryEntry.controls["course"].value["courseName"]);
    if(inquiryEntry.valid){
      this.isInquiryCreated = true;
      this.newInquiry = inquiryEntry;
      this.newInquiry.name = inquiryEntry.controls["name"].value;
      this.newInquiry.email = inquiryEntry.controls["email"].value;
      this.newInquiry.mobileNo = inquiryEntry.controls["mobileNo"].value;
      let course = new Course();
      course.courseName = inquiryEntry.controls["course"].value["courseName"];
      course.fees = inquiryEntry.controls["course"].value["fees"];
      course.trainerName = inquiryEntry.controls["course"].value["trainerName"];
      this.newInquiry.course = course;
    }

  }

}
