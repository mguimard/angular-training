import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Gradient from './gradient';
import { GradientChooserComponent } from "./gradient-chooser/gradient-chooser.component";
import { GradientPreviewComponent } from './gradient-preview/gradient-preview.component';

const defaultGradient: Gradient = {
  name: ' default',
  startColor: '#ff0000',
  endColor: '#0000FF'
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, GradientPreviewComponent, GradientChooserComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'tp-cva';

  f = new FormGroup({
    gradient1: new FormControl(defaultGradient)
  })

}
