import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  constructor(){
    console.log("Pipe Object Created...");
  }

  transform(value: any, args?: any): any {
    let newValue = "R";
    return newValue;
  }

}
