import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pizza } from './pizza';
import { HttpClient } from '@angular/common/http';

const url =
  'https://raw.githubusercontent.com/mguimard/angular-training/refs/heads/master/pizzas.json';

@Injectable({
  providedIn: 'root',
})
export class PizzasService {
  http = inject(HttpClient);

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(url);
  }

  addPizzas(pizza: Pizza) {
    this.http.post<Response>(url, pizza).subscribe({
      next: (res) => {
        console.log('success');
      },
      error: (err) => {
        console.log('ooops error');
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  removePizza(pizza: Pizza) {
    this.http.delete<Response>(url + '/' + pizza.name).subscribe({
      next: (res) => {
        console.log('success');
      },
      error: (err) => {
        console.log('ooops error');
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  constructor() {
    console.log('Constructeur pizza service');
  }
}
