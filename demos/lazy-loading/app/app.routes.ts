import { Routes } from '@angular/router';


export function loadHomeModule() {
    return import('./home/home.module')
        .then(m => m.HomeModule)
};

export function loadFacturesModule() {
    return import('./factures/factures.module')
        .then(m => m.FacturesModule)
};

export const routes: Routes = [
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
        redirectTo: '/home',
        pathMatch: 'full'
    }
];