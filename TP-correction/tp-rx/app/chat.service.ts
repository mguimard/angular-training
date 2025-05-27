import { Injectable, signal } from '@angular/core';

const initialUsers = ['alice', 'bob']
const initialMessages = ['hello', 'Ola']

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  users = signal(initialUsers)
  messages = signal(initialMessages)

  addUser(newUser: string) {
    this.users.set([...this.users(), newUser])

    /*
    this.users.update((value) => {      
      return [...value, newUser];
    })
    */
  }

  addMessages(newMessage: string) {
    this.messages.set([...this.messages(), newMessage])
  }
}
