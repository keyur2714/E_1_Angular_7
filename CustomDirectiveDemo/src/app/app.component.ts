import { Component, ViewChild, ElementRef } from '@angular/core';
import { MyColorDirective } from './my-color.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomDirectiveDemo';
  fontSize :string = '25px';

  @ViewChild("m1")
  m1: ElementRef;

  @ViewChild("m2")
  m2: ElementRef;

  @ViewChild(MyColorDirective)
  myColorDirective: MyColorDirective;
  
  changeColor(color):void{
    alert(color);
    this.myColorDirective.changeColor(color,this.m1);    
    this.myColorDirective.changeColor(color,this.m2);    
  }
}
