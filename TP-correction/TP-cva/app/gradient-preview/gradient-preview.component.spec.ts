import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientPreviewComponent } from './gradient-preview.component';

describe('GradientPreviewComponent', () => {
  let component: GradientPreviewComponent;
  let fixture: ComponentFixture<GradientPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradientPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradientPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
