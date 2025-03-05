import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { AngularMaterialModule } from '../angular-material.module';
import { Todo } from '../todo';
import { provideRouter, RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  const todo: Todo = {
    id: 123,
    title: 'whatever',
    userId: 123,
    completed: false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
      imports: [AngularMaterialModule, RouterModule.forRoot([])],
      providers: [provideRouter([])],
    })
      .overrideComponent(TodoItemComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;

    component.todo = todo;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title inside the toggle', () => {
    const el: HTMLElement = fixture.debugElement.query(
      By.css('mat-slide-toggle')
    ).nativeElement;
    expect(el.textContent).toBe(todo.title);
  });

  it('should update the title when the input changes', () => {
    component.todo = {
      id: 456,
      title: 'Other title',
      userId: 4321,
      completed: true,
    };

    fixture.detectChanges();

    const el: HTMLElement = fixture.debugElement.query(
      By.css('mat-slide-toggle')
    ).nativeElement;
    expect(el.textContent).toBe('Other title');
  });

  it('should correctly set the toggle check state', () => {
    const el: HTMLElement = fixture.debugElement.query(
      By.css('mat-slide-toggle')
    ).nativeElement;

    console.log('Element', el)

    expect(el.getAttribute('ng-reflect-checked')).toBe('false');

    component.todo.completed = true;
    fixture.detectChanges();
    
    expect(el.getAttribute('ng-reflect-checked')).toBe('true');
  });
});
