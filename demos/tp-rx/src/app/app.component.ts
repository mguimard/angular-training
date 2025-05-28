import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import { ChatComponent } from "./chat/chat.component";

@Component({
  selector: 'app-root',
  imports: [ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {

  title = 'tp-rx';

  constructor(private chatService: ChatService) { }

  addRandomUser() {
    this.chatService.addUser('New user ' + Date.now())
  }
}
