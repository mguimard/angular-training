import { Component } from '@angular/core';

@Component({
  selector: 'app-animal',
  imports: [],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css',
  standalone: true
})
export class AnimalComponent {
  constructor() {
    console.log('AnimalComponent::new')
  }
}
