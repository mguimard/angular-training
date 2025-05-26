import { Component, ElementRef } from '@angular/core';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-five',
  template: `
  {{cdCheck()}}
     <a>Cmp5</a>
  `,
  styles: [
  ],
  standalone: false
})
export class FiveComponent {

  constructor(private el: ElementRef) { }
  cdCheck() {
    hightlight(this.el);
  }

}
