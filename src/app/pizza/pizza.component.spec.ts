import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaComponent } from './pizza.component';
import { CherOuPasCherPipe } from '../cher-ou-pas-cher.pipe';

describe('PizzaComponent', () => {
  let component: PizzaComponent;
  let fixture: ComponentFixture<PizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaComponent, CherOuPasCherPipe]
    });
    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.componentInstance;
    component.pizza_input = {
      name: 'saumon',
      prix: 12
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
