import { Component, inject, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos.service';
import { Todo } from '../todo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-detail',
  standalone: false,
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent implements OnDestroy {

  todoId : number = 0;
  todo: Todo | undefined;
  subscriptions: Subscription[] = [];

  constructor(route: ActivatedRoute){

    let subscription = route.params.subscribe((params) => {
      this.todoId = parseInt(params['todoId'])
      console.log(typeof this.todoId)
      this.todo = inject(TodosService).getTodo(this.todoId);
    });

    this.subscriptions.push(subscription)
  }

  ngOnDestroy(): void {
   this.subscriptions.map(s => s.unsubscribe());
  }
}
