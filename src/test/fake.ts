/* eslint-disable @angular-eslint/prefer-standalone */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from 'src/app/todo';
 

export class FakeTodoService {

  originalList: Todo [] = [
    {id: 123, title: 'whatever', userId: 123, completed: false},
    {id: 456, title: 'whatever', userId: 456, completed: true},
  ];

  sub = new BehaviorSubject<Todo[]>(this.originalList);

  getTodos(){
    return this.sub.asObservable();
  }

  addTodo (todo:Todo) {
    this.originalList.push(todo)   
    this.sub.next([...this.originalList])
  }
}

@Component({
  selector: 'app-todo-item',
  template: '<p>Bonjour le monde</p>',
  standalone: false
})
export class FakeTodoItemComponent {
  @Input() todo!: Todo;
  @Output() completed = new EventEmitter<boolean>();
}