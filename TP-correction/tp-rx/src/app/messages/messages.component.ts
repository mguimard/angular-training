import { Component, inject } from '@angular/core';
import { ChatService } from '../chat.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-messages',
  imports: [MessageComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  standalone: true
})
export class MessagesComponent {
  chatService = inject(ChatService)
}
