import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalStringComponent } from './animal-string.component';

describe('AnimalStringComponent', () => {
  let component: AnimalStringComponent;
  let fixture: ComponentFixture<AnimalStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalStringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
