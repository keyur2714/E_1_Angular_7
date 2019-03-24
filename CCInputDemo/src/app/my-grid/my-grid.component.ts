import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.css']
})
export class MyGridComponent implements OnInit {

  @Input()
  dataList: any[] = [];

  @Input("headerList")
  headerColumnList: string[] = [];

  @Input("propertyList")
  propertyNameList: string[] = [];

  @Input("bgColor")
  bgColorStyle: string = 'dark';

  @Output()
  getSelectedRow: any = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  getRow(data: any):void{
    this.getSelectedRow.emit(data);
  }
}
