import { Component, inject } from '@angular/core';
import { ChatService } from '../chat.service';
import { UserComponent } from "../user/user.component";

@Component({
  selector: 'app-users',
  imports: [UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  chatService = inject(ChatService)
}
