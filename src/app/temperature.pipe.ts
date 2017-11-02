import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: any, degree: any): any {
    let val = null;
    if(degree === null || degree === undefined){degree = 'celcius';}
    if (degree === 'celcius') {
      val = value * 9 / 5 + 32;
    } else if (degree === 'fahrenheit') {
      val = (value - 32) * 5 / 9;
    }

    return val;
  }

}
