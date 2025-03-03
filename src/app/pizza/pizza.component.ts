import { Component, Input } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
    selector: 'app-pizza',
    templateUrl: './pizza.component.html',
    styleUrls: ['./pizza.component.css'],
    standalone: false
})
export class PizzaComponent {
    @Input() pizza_input!: Pizza;
}
