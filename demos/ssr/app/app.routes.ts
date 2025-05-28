import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
    standalone: true,
    template: ' Welcome !'
})
export class HomeComponent {

}

export const routes: Routes = [
    { path: 'page-1', loadComponent: () => import('./page-1/page-1.component') },
    { path: 'page-2', loadComponent: () => import('./page-2/page-2.component') },
    { path: 'page-3', loadComponent: () => import('./page-3/page-3.component') },
    { path: '', component: HomeComponent }
];
