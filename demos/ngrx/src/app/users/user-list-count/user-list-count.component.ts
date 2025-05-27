import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../user';

// dumb component
@Component({
  selector: 'app-user-list-count',
  templateUrl: './user-list-count.component.html',
  styleUrls: ['./user-list-count.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class UserListCountComponent {
  users$: Observable<User[]>;

  constructor(private store: Store<{ users: User[] }>) {
    this.users$ = store.select('users');
  }
}