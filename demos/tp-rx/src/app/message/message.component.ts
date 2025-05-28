import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {
  @Input() message!: string;
}
