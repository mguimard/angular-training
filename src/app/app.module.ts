import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoitureComponent } from './voiture/voiture.component';
import { AnimalComponent } from './animal/animal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaComponent } from './pizza/pizza.component';
import { CounterComponent } from './counter/counter.component';
import { ShowComponent } from './show/show.component';
import { UserLogDirective } from './user-log.directive';
import { CherOuPasCherPipe } from './cher-ou-pas-cher.pipe';
import { PizzasService } from './pizzas.service';

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
    CherOuPasCherPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    PizzasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
