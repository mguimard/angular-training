import { Component, ElementRef } from '@angular/core';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-six',
  template: `
  {{cdCheck()}}
     <a>Cmp6</a>
  `,
  styles: [
  ],
  standalone: false
})
export class SixComponent {

  constructor(private el: ElementRef) { }
  cdCheck() {
    hightlight(this.el);
  }
}
