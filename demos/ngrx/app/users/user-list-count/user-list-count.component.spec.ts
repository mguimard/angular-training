import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListCountComponent } from './user-list-count.component';

describe('UserListCountComponent', () => {
  let component: UserListCountComponent;
  let fixture: ComponentFixture<UserListCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
