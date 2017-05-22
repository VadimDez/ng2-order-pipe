import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class Ng2OrderPipe implements PipeTransform {

  transform(value: any[], expression?: any, reverse?: boolean, option?: string): any {

    if (!value) {
      return value;
    }

    let array: any[] = value.sort((a: any, b: any): number => {
      if (option && option.toLowerCase() === 'case-insensitive' &&
        this.isString(a[expression]) && this.isString(b[expression])) {
        return a[expression].localeCompare(b[expression]);
      }
      return a[expression] > b[expression] ? 1 : -1;
    });

    if (reverse) {
      return array.reverse();
    }

    return array;
  }

  isString(value: any) {
    return typeof value === 'string' || value instanceof String;
  }
}
