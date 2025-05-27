import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientChooserComponent } from './gradient-chooser.component';

describe('GradientChooserComponent', () => {
  let component: GradientChooserComponent;
  let fixture: ComponentFixture<GradientChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradientChooserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradientChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
