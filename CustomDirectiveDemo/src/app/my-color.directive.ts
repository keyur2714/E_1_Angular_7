import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective implements AfterViewInit{

  @Input()
  color: string = 'red';

  @Input()
  fontSize : string = '55px';

  constructor(private elementRef: ElementRef) { 
    console.log("Directive Object Created...!");
    console.log(this.elementRef.nativeElement);
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
    this.elementRef.nativeElement.innerHTML = 'Sachin';
  }

  changeColor(color: string,elementRef:ElementRef):void{
    this.color = color;    
    this.elementRef = elementRef;
    this.elementRef.nativeElement.style.color = this.color;
  }
}
