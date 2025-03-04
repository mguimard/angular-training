import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pizza } from './pizza';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  private pizzas: Pizza[] = [
    {
      name: 'Reine',
      prix: 12
    },
    {
      name: 'Chorizo',
      prix: 13
    }
  ]

  private obs$ = of(this.pizzas)

  getPizzas() : Observable<Pizza[]> {
    return this.obs$;
  }

  addPizzas(pizza: Pizza){
    this.pizzas.push(pizza)
  }

  removePizza(pizza: Pizza){
    let index = this.pizzas.indexOf(pizza)
    if(index >= 0){
      this.pizzas.splice(index, 1)
    }
  }

  constructor(http: HttpClient) {
    console.log('Constructeur pizza service')
  }
}
