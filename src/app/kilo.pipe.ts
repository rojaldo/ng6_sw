import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kilo'
})
export class KiloPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args) {
      if (args === 'gr') {
        return value + ' gr';
      } else if (args === 'kg') {
        return value + ' kg';
      } else {
        console.log('Wrong parameter: ' + args);
        return value;
      }
    } else {
      return value + ' kg';
    }
  }

}
