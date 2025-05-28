import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionStrategy } from '@angular/core';
import { MessageComponent } from './message.component';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageComponent]
    })
      .overrideComponent(MessageComponent, {
        set: {
          changeDetection: ChangeDetectionStrategy.Default
        }
      })
      .compileComponents();

    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly show the given input message', () => {
    component.message = "Hello !!!";
    fixture.detectChanges();
    let el = fixture.elementRef.nativeElement as HTMLElement;
    expect(el.querySelector('p')?.textContent).toEqual('Hello !!!');
  })

});
