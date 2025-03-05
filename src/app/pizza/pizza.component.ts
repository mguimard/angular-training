/* eslint-disable @angular-eslint/prefer-standalone */
/* eslint-disable @angular-eslint/no-input-rename */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from '../pizza';
import { CherOuPasCherPipe } from '../cher-ou-pas-cher.pipe';

@Component({
    selector: 'app-pizza',
    templateUrl: './pizza.component.html',
    styleUrls: ['./pizza.component.css'],
    standalone: false
})
export class PizzaComponent implements OnInit {

    // définit notre interface avec notre parent
    @Input("other_input_name") pizza_input!: Pizza;
    @Output() pizzaClicked = new EventEmitter<Pizza>();
    @Output() removeRequested = new EventEmitter<void>();

    constructor(){
        console.log('(constructor) Pizza en input:', this.pizza_input)
    }

    ngOnInit(): void {
        console.log('(ngOnInit) Pizza en input:', this.pizza_input)
        const pipe = new CherOuPasCherPipe()
        const s : string = pipe.transform(this.pizza_input, 5);
        console.log(s)
    }

}
