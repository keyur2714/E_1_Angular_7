import { Component } from '@angular/core';

@Component({
    selector : 'app-failure-msg',
    template : `<h1>{{failureMsg}}</h1>`,
    styles : ['h1{ color : red;}']
})
export class FailureMessage{
    failureMsg : string = 'Sorry but result is Fail...!';
    constructor(){
        console.log("FailureMsgComponent Loaded...");
      }
}