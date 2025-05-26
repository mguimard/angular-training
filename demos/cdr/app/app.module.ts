import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { FiveComponent } from './five/five.component';
import { FourComponent } from './four/four.component';
import { OneComponent } from './one/one.component';
import { SevenComponent } from './seven/seven.component';
import { SixComponent } from './six/six.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
