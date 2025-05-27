import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
  standalone: true
})
export class LoginFormComponent {

  f = new FormGroup({
    username: new FormControl('',
      {
        validators: [
          Validators.required,
          Validators.minLength(5)
        ],
        updateOn: 'change'
      }
    ),
    password: new FormControl('')
  })

  addControl() {
    // this.f.addControl('remember', new FormControl(false))
  }

  submit() {
    throw new Error('Method not implemented.');
  }
}
