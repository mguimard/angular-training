import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  standalone: true
})
export class ChildComponent {

  data = inject(DataService)


}
