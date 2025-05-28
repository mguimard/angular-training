import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, Input } from '@angular/core';
import { ChatService } from '../chat.service';
import { MessagesComponent } from './messages.component';

const FakeChatService = {
  messages() {
    return ['hello', 'world', 'angular']
  }
}

@Component({
  selector: 'app-message',
  template: '<p>whatever</p>',
  standalone: true
})
class FakeMessageComponent {
  @Input() message!: string;
}

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeAll(() => {
    console.log('Executed beafore suite starts')
  })

  afterAll(() => {
    console.log('Executed after test suite')
  })

  afterEach(() => {
    console.log('Executed after each test')
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagesComponent],
      providers: [
        { provide: ChatService, useValue: FakeChatService }
      ]
    })
      .overrideComponent(MessagesComponent, {
        set: {
          imports: [FakeMessageComponent]
        }
      })
      .compileComponents();

    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the messages from the service', () => {
    expect(component).toBeTruthy();
    let el = fixture.elementRef.nativeElement as HTMLElement;
    let messages = el.querySelectorAll('app-message')
    expect(messages.length).toBe(3)
  });

});
