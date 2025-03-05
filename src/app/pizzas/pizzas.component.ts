/* eslint-disable @angular-eslint/prefer-standalone */
import { Component, inject, OnDestroy } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzasService } from '../pizzas.service';
import { animate, state, style, transition, trigger } from '@angular/animations';


//trigger, state, transistion
// une animation, plusieurs états, transition entre 2 états

@Component({
    selector: 'app-pizzas',
    templateUrl: './pizzas.component.html',
    styleUrls: ['./pizzas.component.css'],
    standalone: false,
    animations:[
      trigger('affichePizzas',[
        state('affiche', style({opacity: 1, backgroundColor:'blue', color:'red', transform:'rotate(0deg)'})),
        state('cache', style({opacity: 0, backgroundColor:'green', color:'#2faced', transform:'rotate(1080deg)'})),
        transition('cache => affiche', [animate('1s linear')]),
        transition('affiche => cache', [animate('2s linear')])
      ])
    ]
})
export class PizzasComponent implements OnDestroy{

  show_pizzas = false;
  count = 0
  last_clicked = ''
/*
  my_promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve("Voici de la donnée résolue") , 2000)
  });

  my_promise2: Promise<string[]> = new Promise((resolve) => {
    let data = ["foo" ,"bar" , "lol"]
    setTimeout(() => resolve(data) , 2000)
  });
*/
  service3 = inject(PizzasService)
  pizzas$ = this.service3.getPizzas()

  // injection via le constructeur
  constructor(private pizzasService: PizzasService){
    // injection à la main
    const service = inject(PizzasService);
    
    // version avec un new
    //let service2 = new PizzasService()

    console.log("pizza service", pizzasService == service)
    //console.log("pizza service", pizzasService == service2)
   // console.log('my_promise', this.my_promise)
    
    //this.subscription = this.pizzas$.subscribe();
    //this.subscription.unsubscribe();
  }

  ngOnDestroy(): void {
    // nettoyage
    console.log('coucou')
  }

  togglePizzas() {
    this.show_pizzas = !this.show_pizzas;
  }

  handlePizzaEvent(event: Pizza){
    this.last_clicked = event.name;
    console.log(event)
    this.count++
  }

  addPizza(name: string, _prix: string){
    const prix = parseInt(_prix, 10)
    this.pizzasService.addPizzas({name, prix});
  }

  removePizza(pizza:Pizza){
    this.pizzasService.removePizza(pizza)
  }
}
