import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, interval, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  count$ = interval(1000)
  users$ = of(['alice', 'bob'])
  countv2 = new BehaviorSubject(0);

  pizzas = signal(['saumon', 'chorizo'])

  constructor() {
    setInterval(() => {
      this.countv2.next(this.countv2.value + 1);
      this.addPizza()
    }, 1000)
  }

  addPizza() {
    this.pizzas.set([...this.pizzas(), 'Nouvelle pizza ' + Date.now()])
  }
}
