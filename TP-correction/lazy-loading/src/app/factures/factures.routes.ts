import { Routes } from "@angular/router";
import { RootComponent } from "./root/root.component";

export const FacturesRoutes: Routes = [{
  path: '',
  component: RootComponent,
  providers: [

  ],
  children: [
    {
      path: 'list',
      loadComponent: () => import('./factures-list/factures-list.component').then(c => c.FacturesListComponent)
    },
    {
      path: 'new',
      loadComponent: () => import('./factures-new/factures-new.component').then(c => c.FacturesNewComponent)
    }
  ]
}];