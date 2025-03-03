import { Component } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
    selector: 'app-pizzas',
    templateUrl: './pizzas.component.html',
    styleUrls: ['./pizzas.component.css'],
    standalone: false
})
export class PizzasComponent {

  pizzas: Pizza[] = [
    {
      name: 'Reine',
      prix: 12
    },
    {
      name: 'Chorizo',
      prix: 13
    }
  ]

  show_pizzas = false;

  togglePizzas() {
    this.show_pizzas = !this.show_pizzas;
  }
}
