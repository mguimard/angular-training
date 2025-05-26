import { Component, ElementRef } from '@angular/core';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-seven',
  template: `
  {{cdCheck()}}
     <a>Cmp7</a>
  `,
  styles: [
  ],
  standalone: false
})
export class SevenComponent {

  constructor(private el: ElementRef) { }
  cdCheck() {
    hightlight(this.el);
  }
}
