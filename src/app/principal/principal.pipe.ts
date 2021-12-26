import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'principal'
})
export class PrincipalPipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if(query === undefined || query === ''){
      return value;
    }
    return value.filter(principal=> {
      return principal.nombre.toLowerCase().includes(query.toLowerCase());
    });
  }

}