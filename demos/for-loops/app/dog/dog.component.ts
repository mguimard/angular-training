import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dog',
  imports: [],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css',
  standalone: true
})
export class DogComponent {
  @Input() dog!: any;
  constructor() {
    console.log('Constructor dog')
  }
}
