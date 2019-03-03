import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {

  educationList = [
    {
      degree: 'SSC',
      per: 72.14,
      year: 2001
    },
    {
      degree: 'HSC',
      per: 66.50,
      year: 2003
    },
    {
      degree: 'BTech IT',
      per: 72.14,
      year: 2006
    },
    {
      degree: 'MCA',
      per: 65.00,
      year: 2009
    } 
  ];

  constructor() { }

  ngOnInit() {
  }

}
