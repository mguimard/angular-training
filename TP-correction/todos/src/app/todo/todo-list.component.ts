import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import Todo from './todo';
import { TodoComponent } from "./todo.component";
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos$: Observable<Todo[]>;

  constructor(private service: TodoService) {
    this.todos$ = service.getTodos$();
  }
}
