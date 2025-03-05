import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterModule, Routes } from '@angular/router';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { ContactComponent } from './contact/contact.component';


const myCanActivate : CanActivateFn = (route:  ActivatedRouteSnapshot, /*state*/) => {
  if(route.params['todoId'] === '3') {
    //NotificationService.toast('Interdit..');
    return false;
  }
  return true;
}

const routes: Routes = [
  {path:'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {path: 'todos/:todoId', component: TodoDetailComponent,
     canActivate: [myCanActivate]},     
  {path: 'pizzas', component: PizzasComponent},
  {path: 'ajout', component:  PizzaFormComponent},
  {path: 'home', component: TodoListComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent} // must be the last route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
