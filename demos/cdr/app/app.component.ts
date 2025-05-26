import { ApplicationRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-counter></app-counter>
<div>
    <button (click)="app.tick()">Trigger Change Detection</button>
</div>
<div class="tree">
    <ul>
        <li>
            <app-one></app-one>
        </li>
    </ul>
</div>
<div style="margin-bottom: 5em; clear: both;"></div>
    
  `,
  styles: [],
  standalone: false
})
export class AppComponent {
  constructor(public app: ApplicationRef) {

  }


}
