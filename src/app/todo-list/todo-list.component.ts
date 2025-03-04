import { Component, inject, OnDestroy } from '@angular/core';
import { TodosService } from '../todos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',  
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  standalone: false
})
export class TodoListComponent implements OnDestroy{
  service = inject(TodosService)
  todos$ = this.service.getTodos()
  completedTodos: number = 0;
  subscription: Subscription;

  constructor(){
    this.subscription = 
    this.todos$.subscribe((data) => {
      console.log('Execute count')
      this.completedTodos = data.filter(t => t.completed).length
    })
  }

  addTodo(title:string){
    this.service.addTodo(title)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  
}
