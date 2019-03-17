import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

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

}
