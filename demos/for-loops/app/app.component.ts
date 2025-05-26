import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DogComponent } from './dog/dog.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, DogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  dogs = [
    { name: 'medor' },
    { name: 'maxou' },
    { name: 'milou' }
  ]
  title = 'for-loops';
  sort() {
    this.dogs.sort((a, b) => a.name > b.name ? 1 : -1);

    this.dogs = JSON.parse(JSON.stringify(this.dogs))
  }

}
