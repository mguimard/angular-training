import { Routes } from "@angular/router";
import { RootComponent } from "./root/root.component";

const FacturesRoutes: Routes = [{
  path: '',
  component: RootComponent,
  children: [
    {
      path: 'list',
      loadComponent: () => import('./factures-list/factures-list.component')
    },
    {
      path: 'new',
      loadComponent: () => import('./factures-new/factures-new.component')
    }
  ]
}];

export default FacturesRoutes;