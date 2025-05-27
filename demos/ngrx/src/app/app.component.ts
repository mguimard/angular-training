import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './users/user';
import { UserListCountComponent } from './users/user-list-count/user-list-count.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { clear } from './users/users.actions';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    UserListComponent,
    UserListCountComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'ngrx-v19';

  users$: Observable<User[]>;

  constructor(private store: Store<{ users: User[] }>) {
    this.users$ = store.select('users');
    console.log(store)

    this.users$.subscribe(data => console.log)
  }

  clearUsers() {
    this.store.dispatch(clear());
  }

}
