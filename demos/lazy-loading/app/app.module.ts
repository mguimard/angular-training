import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PreloadingStrategy, Route, RouterModule, Routes } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { AppComponent } from './app.component';
import { SomeComponent } from './some/some.component';


export function loadHomeModule() {
  return import('./home/home.module')
    .then(m => m.HomeModule)
};

export function loadFacturesModule() {
  return import('./factures/factures.module')
    .then(m => m.FacturesModule)
};

const routes: Routes = [
  {
    path: 'home',
    loadChildren: loadHomeModule
  },
  {
    path: 'factures',
    loadChildren: loadFacturesModule
  },
  {
    path: '',
    component: SomeComponent
  }
];

/**
 * This super loader strategy will only preload the home route chunks!
 * 
 */
@Injectable({ providedIn: 'root' })
class MyCustomLoadingStrategy implements PreloadingStrategy {

  preload(route: Route, fn: () => Observable<any>): Observable<any> {

    if (route.path === 'home')
      return fn().pipe(catchError(() => of(null)))

    return of(null);
  }

}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: MyCustomLoadingStrategy })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
