import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TodosService } from './todos.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Todo } from './todo';

describe('TodosService', () => {
  let service: TodosService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to return a create todo', () => {
    //expect(service).toBeTruthy();
    const todo = service.addTodo('whatever');
    const todo_get = service.getTodo(todo.id);
    expect(todo_get).toBeDefined();
    expect(todo_get?.title).toEqual('whatever');
  });

  it('should be do a request automatically', () => {
    const req = httpTesting.expectOne(
      'https://jsonplaceholder.typicode.com/todos',
      'Request to load the data'
    );

    expect(req.request.method).toBe('GET');

    console.log('FLUSH');
    req.flush([{ id: 123, title: 'whatever', userId: 123, completed: false }]);
    console.log('call get todo');

    firstValueFrom(service.getTodos()).then(() => {
      const todo = service.getTodo(123);
      expect(todo?.title).toEqual('whatever');
    });
  });

  it('should be do a request automatically v2', fakeAsync((): void => {
    // ..
    const req = httpTesting.expectOne(
      'https://jsonplaceholder.typicode.com/todos',
      'Request to load the data'
    );

    expect(req.request.method).toBe('GET');

    console.log('FLUSH');
    req.flush([{ id: 123, title: 'whatever', userId: 123, completed: false }]);
    console.log('call get todo');
    tick();

    //firstValueFrom(service.getTodos()).then(() => {
    const todo = service.getTodo(123);
    expect(todo?.title).toEqual('whatever');
    //});
  }));

  it('should be store the http error', fakeAsync((): void => {
    // ..
    const req = httpTesting.expectOne(
      'https://jsonplaceholder.typicode.com/todos',
      'Request to load the data'
    );

    expect(req.request.method).toBe('GET');

    req.flush('BOOOM ERROR', {
      status: 403,
      statusText: 'boom',
    });
    tick();
    expect(service.latest_error).toBeDefined();
  }));

  it('should return undefined when retrieving a non existent todo', () => {
    //
    const todo = service.getTodo(456)  
    expect(todo).toBeUndefined()
  })

  it('should correctly update a todo', () => {    
    const todo = service.addTodo('whatever');    
    expect(todo.completed).toEqual(false)
    service.update(todo, true);
    const updated = service.getTodo(todo.id)
    expect(updated?.completed).toEqual(true)
  })

  it('should throw an exception when trying to update a non existent todo', () => {    
    const todo: Todo = {id: 123, title: 'whatever', userId: 123, completed: false}
    try{
      service.update(todo, true)
      fail();
    } catch(err){
      expect(err).toBe('Oops pas trouvé')
    }
  })

});
