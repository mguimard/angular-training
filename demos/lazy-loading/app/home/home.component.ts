import { Component, Type } from '@angular/core';
import { FruitComponent } from '../components/fruit/fruit.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent {

  fruitComponent!: Promise<Type<FruitComponent>>;

  constructor() { }

  loadFruitComponent(): void {
    if (!this.fruitComponent)
      this.fruitComponent = import('../components/fruit/fruit.component')
        .then(({ FruitComponent }) => FruitComponent)
  }

  ngOnInit() {
  }

}
