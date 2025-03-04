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

  /**
   * 
   * @returns an observable on a todo array
   */
  public getTodos(): Observable<Todo[]> {
    return this.sub.asObservable()
  }

  /**
   * 
   * @param title a simple string that will be the todo's title
   */
  public addTodo(title:string): void {
    this.todos.push({
      title,
      userId: Date.now(),
      id: Date.now(),
      completed: false
    })
    this.broadcast()
  }

  public update(todo: Todo, completed: boolean) {
    let index = this.todos.indexOf(todo)
    
    if(index < 0){
      throw Error("Oops pas trouvé")
    }
    
    this.todos[index].completed = completed;
    this.broadcast();
  }

  private broadcast(){
    this.todos = JSON.parse(JSON.stringify(this.todos));
    this.sub.next(this.todos);
  }
}
