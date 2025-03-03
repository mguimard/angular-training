import { Component } from '@angular/core';

@Component({
    selector: 'app-animal',
    templateUrl: './animal.component.html',
    styleUrls: ['./animal.component.css'],
    standalone: false
})
export class AnimalComponent {
  public text: string = "hello";

}
