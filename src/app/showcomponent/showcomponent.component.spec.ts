import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcomponentComponent } from './showcomponent.component';

describe('ShowcomponentComponent', () => {
  let component: ShowcomponentComponent;
  let fixture: ComponentFixture<ShowcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
