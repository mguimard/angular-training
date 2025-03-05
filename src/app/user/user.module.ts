import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  providers: [
    UserService
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
