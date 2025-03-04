import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterModule, Routes } from '@angular/router';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';


const myCanActivate : CanActivateFn = (route:  ActivatedRouteSnapshot, state) => {
  if(route.params['todoId'] === '3') {
    //NotificationService.toast('Interdit..');
    return false;
  }
  return true;
}

const routes: Routes = [
  {path: 'todos/:todoId', component: TodoDetailComponent,
     canActivate: [myCanActivate]},
     
  {path: 'pizzas', component: PizzasComponent},
  {path: 'ajout', component:  PizzaFormComponent},
  {path: 'home', component: TodoListComponent},
  {path: '**', component: PageNotFoundComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
