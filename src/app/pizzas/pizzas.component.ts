import { Component, OnDestroy } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
    selector: 'app-pizzas',
    templateUrl: './pizzas.component.html',
    styleUrls: ['./pizzas.component.css'],
    standalone: false
})
export class PizzasComponent implements OnDestroy{

  pizzas: Pizza[] = [
    {
      name: 'Reine',
      prix: 12
    },
    {
      name: 'Chorizo',
      prix: 13
    }
  ]

  show_pizzas = false;
  count = 0
  last_clicked = ''

  my_promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve("Voici de la donnée résolue") , 2000)
  });

  my_promise2: Promise<string[]> = new Promise((resolve) => {
    let data = ["foo" ,"bar" , "lol"]
    setTimeout(() => resolve(data) , 2000)
  });

  constructor(){
    console.log('my_promise', this.my_promise)
  }

  ngOnDestroy(): void {
    // nettoyage
  }

  togglePizzas() {
    this.show_pizzas = !this.show_pizzas;
  }

  handlePizzaEvent(event: Pizza){
    this.last_clicked = event.name;
    console.log(event)
    this.count++
  }

  removePizza(pizza:Pizza){
    let index = this.pizzas.indexOf(pizza)
    if(index >= 0){
      this.pizzas.splice(index, 1)
    }
  }
}
