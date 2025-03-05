import { Component, inject, OnDestroy } from '@angular/core';
import { TodosService } from '../todos.service';
import { Observable, Subscription } from 'rxjs';
import { Todo } from '../todo';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  standalone: false,
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({ height: '200px', opacity: 1, backgroundColor: 'yellow' })
      ),
      state(
        'closed',
        style({ height: '100px', opacity: 0.8, backgroundColor: 'blue' })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class TodoListComponent implements OnDestroy {
  service = inject(TodosService);
  todos$: Observable<Todo[]> = this.service.getTodos();
  completedTodos: number = 0;
  subscription: Subscription;
  isOpen = false;

  constructor() {
    this.subscription = this.todos$.subscribe((data) => {
      console.log('Execute count');
      this.completedTodos = data.filter((t) => t.completed).length;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
