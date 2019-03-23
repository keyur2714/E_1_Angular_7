import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Output Demo';
  myMessage = 'Good Morning...!';
  message = '';
  formattedMsg = '';  
  originalString = '';
  reverseString = '';

  getMessage(msg):void{
    console.log("---2---");
    this.formattedMsg = msg;
  }

  getOriginalStr(oStr):void{
    console.log('22222222');
    this.originalString = oStr;
  }
  getReverse(rStr):void{
    console.log('3333333333');
    this.reverseString = rStr;
    if(this.originalString === this.reverseString){
      this.message = 'String is Palindrom';
    }else{
      this.message = 'String is Not a Palindrom';
    }
  } 
}
