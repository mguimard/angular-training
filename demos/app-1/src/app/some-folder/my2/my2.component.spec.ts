import { ComponentFixture, TestBed } from '@angular/core/testing';
import { My2Component } from './my2.component';

describe('My2Component', () => {
  let component: My2Component;
  let fixture: ComponentFixture<My2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [My2Component]
    }).compileComponents();

    fixture = TestBed.createComponent(My2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
