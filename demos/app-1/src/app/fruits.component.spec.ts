import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FruitsComponent } from './fruits.component';

describe('FruitsComponent', () => {
  let component: FruitsComponent;
  let fixture: ComponentFixture<FruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
