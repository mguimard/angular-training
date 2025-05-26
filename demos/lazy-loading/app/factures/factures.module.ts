import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturesComponent } from './factures.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FacturesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FacturesComponent
  ]
})
export class FacturesModule { }
