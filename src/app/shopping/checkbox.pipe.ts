import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkbox'
})
export class CheckboxPipe implements PipeTransform {

  transform(items: any[], field: string, value: string[]): any[] {
    if (!items) {
      return [];
    }
    if (!field || !value || value.length <= 0) {
      return items;
    }
    return items.filter(singleItem => {
      return (singleItem != null && singleItem[field] != null && singleItem[field] != undefined && value.indexOf(singleItem[field]) >= 0);
    });
  }
  }

