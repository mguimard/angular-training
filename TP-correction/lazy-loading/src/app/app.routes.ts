import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'users',
        loadChildren: () => import('./users/users.routes')
    },
    {
        path: 'factures',
        loadChildren: () => import('./factures/factures.routes')
    },
    {
        path: '',
        loadComponent: () => import('./home/home.component')
    }

];
