import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ratingbar',
  templateUrl: './ratingbar.component.html',
  styleUrls: ['./ratingbar.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RatingbarComponent,
      multi: true
    }
  ]
})
export class RatingbarComponent
  implements ControlValueAccessor {

  disabled: boolean = false;

  constructor(private elRef: ElementRef,
  ) { }

  public rating: number = 1;

  private onChange: Function = () => { };
  private onTouched!: Function;

  // juste pour la démo ;)
  ratings: number[] = [1, 2, 3, 4, 5];

  public writeValue(value: number): void {
    this.rating = value;
  }

  public registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public ratingClicked(value: number): void {
    this.onTouched();
    this.onChange(value);
    this.rating = value;

    this.triggerEvent();
  }

  triggerEvent() {
    // allows to use (change)="someMethod($event)" on this component
    let event = new CustomEvent('change', {
      bubbles: true,
      detail: {
        value: this.rating
      }
    });
    this.elRef.nativeElement.dispatchEvent(event);
  }
}
