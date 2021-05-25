import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {


  transform(teamVal: any, teamFil?: any): any {
    console.log('teamFil', teamFil);
    return teamFil
     ? teamVal.filter((person:any) => person.price >= teamFil) 
     : teamVal;
}

}
