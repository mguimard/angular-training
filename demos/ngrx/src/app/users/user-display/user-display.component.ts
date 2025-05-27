import { Component, Input } from '@angular/core';
import { User } from '../user';

// dumb component
@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
  , standalone: true
})
export class UserDisplayComponent {
  @Input() user: User | undefined;
}
