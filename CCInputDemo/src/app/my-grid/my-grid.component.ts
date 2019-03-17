import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
