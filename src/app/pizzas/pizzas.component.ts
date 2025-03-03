import { Component } from '@angular/core';

@Component({
    selector: 'app-pizzas',
    templateUrl: './pizzas.component.html',
    styleUrls: ['./pizzas.component.css'],
    standalone: false
})
export class PizzasComponent {

  pizzas = [
    {
      name: 'Reine',
      prix: 12
    },
    {
      name: 'Chorizo',
      prix: 13
    }
  ]
}
