import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import IFruit from './ifruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  private obs$: Observable<IFruit[]>;

  private fruits: IFruit[] = [
    { id: 1, name: 'citron' }, { id: 2, name: 'kiwis' },
  ]
  private sub: BehaviorSubject<IFruit[]> = new BehaviorSubject(this.fruits);

  constructor() {
    console.log('Constructor service')
    this.obs$ = this.sub.asObservable();
  }

  getFruits(): Observable<IFruit[]> {
    return this.obs$;
  }

  addFruit(name: string) {
    this.fruits.push({
      id: Date.now(),
      name
    });

    this.sub.next(this.fruits);
  }

  removeFruit(fruit: IFruit) {
    this.fruits.splice(this.fruits.indexOf(fruit), 1);
    this.sub.next(this.fruits)
  }
}
