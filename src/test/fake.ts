/* eslint-disable @angular-eslint/prefer-standalone */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Todo } from 'src/app/todo';

const originalList: Todo [] = [
  {id: 123, title: 'whatever', userId: 123, completed: false},
  {id: 456, title: 'whatever', userId: 456, completed: true},
];

const sub = new BehaviorSubject<Todo[]>(originalList);

export const FakeTodoService = {

  getTodos:() => sub.asObservable(),

  reset : () => {
    sub.next(originalList)
  },

  fakeAdd : () => {
    const new_list : Todo[] = [...originalList, 
      {id: 789, title: 'whatever', userId: 789, completed: true}
    ]
    sub.next(new_list)
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