import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stroperations',
  templateUrl: './stroperations.component.html',
  styleUrls: ['./stroperations.component.css']
})
export class StroperationsComponent implements OnInit {

  rev : string = '';

  @Output()
  getOriginalStr = new EventEmitter<string>();

  @Output('getReverseStr')
  getRevStr = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  revStr(str:string):void{
    this.rev = str.split("").reverse().join('');    
    this.getOriginalStr.emit(str);
    this.getRevStr.emit(this.rev);
  }  
}
