import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'app-success-msg',
    templateUrl : './success-message.component.html',
    styleUrls : ['./success-message.component.css']
})
export class SuccessComponent implements OnInit{
    successMsg: string = 'Successfully Completed...!';
    constructor(){
        console.log("SuccessMsgComponent Loaded...");
      }

      ngOnInit(){
          console.log("SuccessComponent Inititlized...");
      }
}