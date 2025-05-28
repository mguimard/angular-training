import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PizzaComponent } from './pizza/pizza.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PizzaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'defer';

  stringToTranslate = $localize`:@@myStyring:I should be translated`;

}
