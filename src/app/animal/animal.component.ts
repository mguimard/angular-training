import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Animal } from '../animal';

@Component({
    selector: 'app-animal',
    templateUrl: './animal.component.html',
    styleUrls: ['./animal.component.css'],
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalComponent {
  @Input() animal!: Animal;
}
