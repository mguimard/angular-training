import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza',
  imports: [],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css',
  standalone: true
})
export class PizzaComponent {
  constructor() {
    console.log('PizzaComponent::new')
  }
}
