import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoitureComponent } from './voiture/voiture.component';
import { AnimalComponent } from './animal/animal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaComponent } from './pizza/pizza.component';
import { CounterComponent } from './counter/counter.component';
import { ShowComponent } from './show/show.component';
import { UserLogDirective } from './user-log.directive';
import { CherOuPasCherPipe } from './cher-ou-pas-cher.pipe';
import { PizzasService } from './pizzas.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosService } from './todos.service';
import { CompletedCountPipe } from './completed-count.pipe';
import { SortTodosPipe } from './sort-todos.pipe';
import { ZooComponent } from './zoo/zoo.component';
import { AnimalStringComponent } from './animal-string/animal-string.component';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import { RxService } from './rx.service';
import { ContactComponent } from './contact/contact.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent,
    AnimalComponent,
    NavComponent,
    PizzasComponent,
    PizzaComponent,
    CounterComponent,
    ShowComponent,
    UserLogDirective,
    CherOuPasCherPipe,
    TodoListComponent,
    TodoItemComponent,
    CompletedCountPipe,
    SortTodosPipe,
    ZooComponent,
    AnimalStringComponent,
    PizzaFormComponent,
    PageNotFoundComponent,
    TodoDetailComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
  ],
  providers: [
    PizzasService,
    TodosService,
    RxService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
