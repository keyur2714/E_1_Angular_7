import { Component, OnInit } from '@angular/core';
import { Registration } from './registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registration : Registration = new Registration();

  countryList = [
    {
      "id": 10,
      "code": "Ind",
      "desc": "India"
    },
    {
      "id": 20,
      "code": "US",
      "desc": "United States"
    },
    {
      "id": 30,
      "code": "UK",
      "desc": "United Kingdom"
    }
  ];

  statesList = [
    {
      "id": 27,
      "code": "MH",
      "desc": "Maharashtra"
    },
    {
      "id": 21,
      "code": "GJ",
      "desc": "Gujrat"
    },
    {
      "id": 47,
      "code": "RJ",
      "desc": "Rajasthan"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  getSelectedCountry(country):void{
    this.registration.countryName = country.desc;
  }

  getSelectedState(state):void{
    this.registration.stateName = state.desc;
  }
}
