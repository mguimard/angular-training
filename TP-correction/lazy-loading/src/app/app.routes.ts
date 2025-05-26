import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'users',
        loadChildren: () => import('./users/users.routes').then((m) => m.UsersRoutes)
    },
    {
        path: 'factures',
        loadChildren: () => import('./factures/factures.routes').then((m) => m.FacturesRoutes)
    },
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    }

];
