import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponent } from './some.component';

describe('SomeComponent', () => {
  let component: SomeComponent;
  let fixture: ComponentFixture<SomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
