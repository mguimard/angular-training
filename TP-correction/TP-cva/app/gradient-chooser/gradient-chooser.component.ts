import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import Gradient from '../gradient';
import { GradientPreviewComponent } from "../gradient-preview/gradient-preview.component";

@Component({
  selector: 'app-gradient-chooser',
  imports: [GradientPreviewComponent],
  templateUrl: './gradient-chooser.component.html',
  styleUrl: './gradient-chooser.component.css',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: GradientChooserComponent,
      multi: true
    }
  ]
})
export class GradientChooserComponent implements ControlValueAccessor {

  gradient: Gradient = {
    name: '',
    startColor: '#00FF00',
    endColor: '#FFFFFF'
  };

  disabled = false;

  onChange: (g: Gradient) => void = () => { }
  onTouched: () => void = () => { }

  writeValue(obj: Gradient | null): void {
    console.log('Angular writes the value', obj)
    if (obj)
      this.gradient = obj
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  update() {
    this.onTouched()
    this.onChange(this.gradient)
  }

}
