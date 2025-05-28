import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { PizzaComponent } from './pizza/pizza.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, PizzaComponent, AnimalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'my-super-app';
  constructor() {
    console.log('AppComponent::new')
  }
}
