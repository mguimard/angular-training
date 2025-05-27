import { Component, inject } from '@angular/core';
import { ChatService } from '../chat.service';
import { MessagesComponent } from '../messages/messages.component';
import { UsersComponent } from "../users/users.component";

@Component({
  selector: 'app-chat',
  imports: [MessagesComponent, UsersComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
  standalone: true
})
export class ChatComponent {
  chatService = inject(ChatService)
}
