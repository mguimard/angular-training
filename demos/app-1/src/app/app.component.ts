import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FruitsComponent } from "./fruits.component";

@Component({
  imports: [RouterModule, FruitsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-1';

}
