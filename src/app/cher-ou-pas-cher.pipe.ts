/* eslint-disable @angular-eslint/prefer-standalone */
import { Pipe, PipeTransform } from '@angular/core';
import { Pizza } from './pizza';

@Pipe({
  name: 'cherOuPasCher',
  standalone: false
})
export class CherOuPasCherPipe implements PipeTransform {

  transform(value: Pizza, seul_prix = 12): string {
    console.log('seul_prix', seul_prix)
    return `${value.name} prix: ${value.prix} (${value.prix > seul_prix  ? 'cher' : 'pas cher' })`
  }

}
