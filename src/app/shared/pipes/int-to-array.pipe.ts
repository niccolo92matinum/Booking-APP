import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intToArray',
  standalone: true
})
export class IntToArrayPipe implements PipeTransform {

  transform(value: number|undefined): any {
    return new Array(value);
  }

}
