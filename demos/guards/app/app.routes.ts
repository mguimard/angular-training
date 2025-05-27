import { inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RedirectCommand, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [
            async (route: ActivatedRoute, state: RouterStateSnapshot) => {
                console.log('Guard 1')
                let res = await fetch('https://jsonplaceholder.typicode.com/todos')
                let data = await res.json()
                console.log('Guard 1 over')
                return data[3].completed
            },
            async (route: ActivatedRoute, state: RouterStateSnapshot) => {
                console.log('Guard 2')
                let res = await fetch('https://jsonplaceholder.typicode.com/todos')
                let data = await res.json()
                console.log('Guard 2 over')
                return data[3].completed
            },
        ],
        canDeactivate: [
            (component: AdminComponent, currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {
                console.log('Leaving admin page ....')
                if (component.hasUnsavedChanges) {
                    component.showError();
                    return false
                }
                return true
            }
        ],
        resolve: {
            users: async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot,) => {
                console.log('Users resolver')
                let res = await fetch('https://jsonplaceholder.typicode.com/users')
                let data = await res.json()
                console.log('Users resolver over')
                return data;
            }
        }

    },
    {
        path: 'user/:userId',
        component: UserComponent,
        resolve: {
            user: async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
                console.log('User resolver', route.params['userId'])
                // must be ran before awaiting a promise or 
                // in https://angular.dev/api/core/runInInjectionContext
                const router = inject(Router);

                let res = await fetch('https://jsonplaceholder.typicode.com/users/' + route.params['userId'])

                if (res.status !== 200)
                    return new RedirectCommand(router.parseUrl('/404'))

                let data = await res.json()

                console.log('User resolver over')
                return data;

            }
        }
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    }

];
