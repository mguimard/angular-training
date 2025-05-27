import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RatingbarComponent } from './ratingbar/ratingbar.component';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule, RatingbarComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'rating-bar-v19';

  public formGroup: FormGroup = new FormGroup({
    rating1: new FormControl(2),
    rating2: new FormControl(4)
  });

  rating1Event(event: any) {
    console.log('Rating1Event:(change)', event.detail.value);
  }


  setAllTo4() {
    this.formGroup.controls['rating1'].setValue(4)
    this.formGroup.controls['rating2'].setValue(4)

    if (this.formGroup.controls['rating2'].enabled)
      this.formGroup.controls['rating2'].disable();
    else
      this.formGroup.controls['rating2'].enable();

  }

  someMethod($event: Event) {
    console.log('Event from rating bar', $event)
  }
}
