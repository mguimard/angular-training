import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesNewComponent } from './factures-new.component';

describe('FacturesNewComponent', () => {
  let component: FacturesNewComponent;
  let fixture: ComponentFixture<FacturesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturesNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
