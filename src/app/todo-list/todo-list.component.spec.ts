/* eslint-disable @angular-eslint/prefer-standalone */
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodosService } from '../todos.service';
import { AngularMaterialModule } from '../angular-material.module';
import { SortTodosPipe } from '../sort-todos.pipe';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { FakeTodoItemComponent, FakeTodoService } from 'src/test/fake';
import { Todo } from '../todo';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let fakeService : FakeTodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        FakeTodoItemComponent,
        SortTodosPipe
      ],
      imports: [
        AngularMaterialModule
      ],
      providers: [
        provideNoopAnimations(),
        {provide: TodosService, useClass: FakeTodoService}
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the number of completed todos', () => {
    
     const el : HTMLElement = fixture.debugElement.query(By.css('[data-unit-testing="completed-todos"]'))
      .nativeElement;

    expect(el.textContent).toContain('1 / 2')

  });


  it('should display a new todo, when the services adds one', 
    fakeAsync(() => {
           
    component.service.addTodo('whatever');

    fixture.detectChanges();

    tick();

    const el : HTMLElement = fixture.debugElement.query(By.css('[data-unit-testing="completed-todos"]'))
     .nativeElement;

   expect(el.textContent).toContain('1 / 3')

 }));

});
