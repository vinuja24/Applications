import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customepipe',
  standalone: true
})
export class CustomepipePipe implements PipeTransform {

  transform(value:string): string {
    if(!value) return '';
    return value.toUpperCase();
  }

}
