import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit',
  imports: [],
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.css',
  standalone: true
})
export class FruitComponent {

  constructor() {
    console.log('Constructor fruit component')
  }

}
