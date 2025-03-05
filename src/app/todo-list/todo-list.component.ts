/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-function-type */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/prefer-standalone */
import { Component, inject, InjectionToken, Injector, OnDestroy, OnInit, runInInjectionContext } from '@angular/core';
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
    trigger('completedTodos',[
      state('low',style({fontWeight:'normal', backgroundColor:'red'})),
      state('medium',style({fontWeight:'bold', backgroundColor:'yellow'})),
      state('high',style({fontWeight:'bolder', backgroundColor:'green'})),
      transition('* => *', [animate('1s')])
    ])
  ]
})
export class TodoListComponent implements OnInit, OnDestroy {
  service = inject(TodosService);
  todos$: Observable<Todo[]> = this.service.getTodos();
  completedTodos = 0;
  subscription: Subscription;
  isOpen = false;
  currentAnimationState = 'low'

  constructor() {
    this.subscription = this.todos$.subscribe((data) => {
      console.log('Execute count');
      this.completedTodos = data.filter((t) => t.completed).length;

      if(this.completedTodos < 50){
        this.currentAnimationState = 'low'
      }
      else if(this.completedTodos < 150){
        this.currentAnimationState = 'medium'
      } 
      else {
        this.currentAnimationState = 'high'
      }
    });
  }

  ngOnInit(): void {
    console.log('init')
  }
  

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
