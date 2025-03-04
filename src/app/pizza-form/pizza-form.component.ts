import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-pizza-form',
  standalone: false,
  templateUrl: './pizza-form.component.html',
  styleUrl: './pizza-form.component.css'
})
export class PizzaFormComponent {

  constructor(router: Router, route: ActivatedRoute){
    route.queryParams.subscribe(params => {
      console.log(params['name'])
    })
   // setTimeout(() => router.navigate(['home']), 4000);
  }

  debug(form:any){
    console.log(form.controls['prix'])
  }

}
