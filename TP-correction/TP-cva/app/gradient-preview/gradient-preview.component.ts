import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import Gradient from '../gradient';

@Component({
  selector: 'app-gradient-preview',
  imports: [JsonPipe],
  templateUrl: './gradient-preview.component.html',
  styleUrl: './gradient-preview.component.css',
  standalone: true
})
export class GradientPreviewComponent {
  @Input() gradient: Gradient | null = null;
}
