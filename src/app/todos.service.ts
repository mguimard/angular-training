import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {

  private todos: Todo[] = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: true,
    },
  ];

  private sub = new BehaviorSubject<Todo[]>(this.todos);

  constructor() {}

  getTodos(): Observable<Todo[]> {
    return this.sub.asObservable()
  }
  addTodo(title:string): void {
    this.todos.push({
      title,
      userId: Date.now(),
      id: Date.now(),
      completed: false
    })
    this.broadcast()
  }

  update(todo: Todo, completed: boolean) {
    let index = this.todos.indexOf(todo)
    this.todos[index].completed = completed;
    this.broadcast();
  }

  private broadcast(){
    this.sub.next(this.todos);
  }
}
