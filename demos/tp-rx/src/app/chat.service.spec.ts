import { TestBed } from '@angular/core/testing';

import { ChatService } from './chat.service';

describe('ChatService', () => {
  let service: ChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have some initial data', () => {
    expect(service.messages().length).toBeGreaterThan(0);
  })

  it('should update the users signal', () => {
    let usersCount = service.users().length;
    service.addUser('Whatever');
    expect(service.users().length).toBe(usersCount + 1)
    expect(service.users()[usersCount]).toBe('Whatever')
  })

  it('should not add an empty user', () => {
    expect(() => service.addUser('')).toThrowError()
  })

  it('should update the messsages signal', () => {
    let messagesCount = service.messages().length;
    service.addMessages('Whatever');
    expect(service.messages().length).toBe(messagesCount + 1)
    expect(service.messages()[messagesCount]).toBe('Whatever')
  })
});
