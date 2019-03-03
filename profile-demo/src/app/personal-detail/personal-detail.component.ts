import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  name : string = 'Keyursinh Thakor';
  age: number = 32;
  address: string = 'A-1106, Alcove Society,Pimple Saudagar.';
  contactNo: string = '';

  constructor() { }

  ngOnInit() {
    this.contactNo = '7387029671';
  }

}
