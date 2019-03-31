import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  @ViewChild("num1")
  number1 : ElementRef;
  @ViewChild("num2")
  number2 : ElementRef;

  result : number = 0;

  @ViewChild("res")
  res : ElementRef;

  constructor() { }

  ngOnInit() {    
  }

  add():void{
    this.result = parseInt(this.number1.nativeElement.value) + parseInt(this.number2.nativeElement.value);
  }
  sub():void{
    this.result = parseInt(this.number1.nativeElement.value) - parseInt(this.number2.nativeElement.value);  
  }
  div():void{
    let no2:number = parseInt(this.number2.nativeElement.value);
    if(no2 != 0){
      this.result = parseInt(this.number1.nativeElement.value) / no2;  
    }else{
      this.res.nativeElement.innerHTML = 'Result is:';
    }        
  }
  mul():void{
    this.result = parseInt(this.number1.nativeElement.value) * parseInt(this.number2.nativeElement.value);
  }

  getFormattedResult():ElementRef{
    let resStr = this.res.nativeElement.innerHTML;
    this.res.nativeElement.innerHTML = '<h1>'+resStr+'</h1>';
    return this.res;
  }
}
