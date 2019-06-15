import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: any, maskingChar?: string,noOfMaskchar ?: number): any {
    let maskChar = maskingChar == undefined ? '*' : maskingChar;
    let noOfChar = noOfMaskchar == undefined ? 3 : noOfMaskchar;
    let newValue = value.substring(0,value.length - noOfChar);
    for(let i=1; i<= noOfChar ; i++){
      newValue = newValue + maskChar;
    }
    //alert(newValue);
    return newValue;
  }

}
