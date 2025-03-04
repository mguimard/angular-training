import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-animal-string',
  standalone: false,
  templateUrl: './animal-string.component.html',
  styleUrl: './animal-string.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalStringComponent {
  @Input() name!: string;
}
