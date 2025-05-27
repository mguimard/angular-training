import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserDisplayComponent } from '../user-display/user-display.component';
import { UserListCountComponent } from '../user-list-count/user-list-count.component';
import { add, update } from '../users.actions';

// smart component
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  standalone: true,
  styleUrls: ['./user-list.component.css'],
  imports: [CommonModule, UserDisplayComponent, UserListCountComponent]
})
export class UserListComponent {

  users$: Observable<User[]>;

  constructor(private store: Store<{ users: User[] }>) {
    this.users$ = store.select('users');
  }

  addUser() {
    this.store.dispatch(add({ name: 'Albert', age: 24 }));
  }

  updateUser(user: User) {
    this.store.dispatch(update(user));
  }

}
