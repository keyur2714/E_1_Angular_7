import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  @Input()
  dataList: any[] = [];

  @Input()
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
