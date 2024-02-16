import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalcalculator',
  standalone: true,
})
export class TotalcalculatorPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): number {
    let retval;

    return value + value * (18 / 100);
  }
}
