import { Component, inject, OnDestroy } from '@angular/core';
import { TodosService } from '../todos.service';
import { Observable, Subscription } from 'rxjs';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',  
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  standalone: false
})
export class TodoListComponent implements OnDestroy{
  
  service = inject(TodosService)
  todos$: Observable<Todo[]> = this.service.getTodos()
  completedTodos: number = 0;
  subscription: Subscription;

  constructor(){
    this.subscription = 
    this.todos$.subscribe((data) => {
      console.log('Execute count')
      this.completedTodos = data.filter(t => t.completed).length
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }  
}
