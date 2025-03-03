import { Component } from '@angular/core';

@Component({
    selector: 'app-voiture',
    templateUrl: './voiture.component.html',
    styleUrls: ['./voiture.component.css'],
    standalone: false
})
export class VoitureComponent {


  demarre(){
    console.log('vroom')
  }
}
