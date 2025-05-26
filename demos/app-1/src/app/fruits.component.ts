import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FruitComponent } from "./fruit.component";
import { FruitService } from './fruit.service';
import IFruit from './ifruit';

@Component({
  selector: 'app-fruits',
  imports: [CommonModule, FruitComponent],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.css',
})
export class FruitsComponent implements OnDestroy {

  fruits: IFruit[] = [];

  subscription: Subscription;
  fruits$: Observable<IFruit[]>;

  constructor(private service: FruitService) {
    console.log('constructor parent', this.service);

    this.fruits$ = this.service.getFruits();

    this.subscription = this.service.getFruits().subscribe((data) => {
      this.fruits = data;
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addFruit(name: string) {
    this.service.addFruit(name);
  }

  removeFruit(fruit: IFruit) {
    this.service.removeFruit(fruit);
  }

}
