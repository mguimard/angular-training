import { Component } from '@angular/core';
import { LoginFormComponent } from "./login-form/login-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";

@Component({
  selector: 'app-root',
  imports: [LoginFormComponent, SignupFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'forms-demos';
}
