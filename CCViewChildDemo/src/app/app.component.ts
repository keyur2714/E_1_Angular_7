import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'CCViewChildDemo';

  @ViewChild("msg")
  msg : ElementRef;

  @ViewChild("name")
  name: ElementRef;

  ngOnInit(){    
  }

  ngAfterViewInit(){
    console.log(this.msg.nativeElement.innerHTML);
    this.msg.nativeElement.innerHTML = 'Hi';
    this.msg.nativeElement.className = 'myStyle';
  }

  display(){
    console.log(this.name.nativeElement.value);
    this.name.nativeElement.value = '';
  }
}
