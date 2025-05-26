import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Default
})
export class CounterComponent {

  count = 0;

  constructor() {
    setInterval(() => {
      this.count++
    }, 1000)
  }

}
