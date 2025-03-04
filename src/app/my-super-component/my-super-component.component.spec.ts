import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySuperComponentComponent } from './my-super-component.component';

describe('MySuperComponentComponent', () => {
  let component: MySuperComponentComponent;
  let fixture: ComponentFixture<MySuperComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySuperComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySuperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
