import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  @Input()
  selectedValue: any = '-1';

  @Input()
  dataList: any[] = [];

  @Input()
  name: string;


  @Output()
  getSelectedValue : any = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  setSelectedValue():void{
    this.getSelectedValue.emit(this.selectedValue);
  }
}
