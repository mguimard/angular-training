import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.css',
  standalone: false
})
export class ShowComponent {
  @Input() str : string = '';
}
