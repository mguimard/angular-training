import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {

  toggle = false;

  data = inject(DataService)

  title = 'rxjs';

  toggleChild() {
    this.toggle = !this.toggle
  }

  constructor() {
    toObservable(this.data.pizzas)
      .subscribe(newData => {
        console.log('New pizza !', this.data.pizzas())
      })
  }
}
