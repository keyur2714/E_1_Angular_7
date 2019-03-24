import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  empList: Employee[] = [];

  selectedEmployee : Employee = new Employee();

  headerList : string[] = ["EmpId","Name","Dept","Salary"];
  propertyList : string[] = ["empId","name","dept","salary"];
  
  constructor() { }

  ngOnInit() {
    let emp1 = new Employee(27,'keyur','IT',11111);
    let emp2 = new Employee(26,'denish','IT',21111);
    let emp3 = new Employee(44,'vinit');
    emp3.dept = 'SALES';
    emp3.salary = 41111;
    this.empList.push(emp1);
    this.empList.push(emp2);
    this.empList.push(emp3);
  }

  getRow(data):void{
    this.selectedEmployee = data;
  }
}
