import { Component, inject, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, FormControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';

const delay = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms))

@Injectable({ providedIn: 'root' })
class CheckUsernameAvailabilityValidator implements AsyncValidator {
  async validate(control: AbstractControl): Promise<ValidationErrors | null> {

    console.log('CheckUsernameAvailabilityValidator')
    await delay(1000)

    let currentValue = control.value;

    let res = await fetch('http://jsonplaceholder.typicode.com/users')
    let data = await res.json()

    console.log('CheckUsernameAvailabilityValidator over')

    for (const user of data) {
      if (user.username === currentValue) {
        return {
          alreadyTaken: 'Ce username est déjà pris.',
          someOtherErrorKey: 'hello error'
        }
      }
    }

    return null
  }
}

@Injectable({ providedIn: 'root' })
class OtherAsyncValidator implements AsyncValidator {
  async validate(control: AbstractControl): Promise<ValidationErrors | null> {

    console.log('OtherAsyncValidator')
    await delay(1000)
    console.log('OtherAsyncValidator over')

    return null
  }
}



@Component({
  selector: 'app-signup-form',
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css',
  standalone: true
})
export class SignupFormComponent {

  usernameValidator = inject(CheckUsernameAvailabilityValidator)
  otherValidator = inject(OtherAsyncValidator)

  username = new FormControl('', {
    updateOn: 'blur',
    asyncValidators: [
      this.usernameValidator.validate.bind(this.usernameValidator),
      this.otherValidator.validate.bind(this.otherValidator)
    ]
  })
}
