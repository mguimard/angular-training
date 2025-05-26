import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnChanges, DoCheck {

  @Input() text = "Default text";

  count = 0;

  constructor(private cdr: ChangeDetectorRef) {

    setInterval(() => {
      this.count++

      if (this.count % 50 === 0)
        this.cdr.detectChanges();

    }, 10)
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
