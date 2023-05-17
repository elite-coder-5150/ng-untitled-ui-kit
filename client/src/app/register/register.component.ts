import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ng-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({}) as FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      username: ['', Validators.required],
      email: [
        '',
        Validators.required,
        Validators.email,
        Validators.minLength(6),
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
        ],
      ],
      confirmPassword: ['', Validators.required],
    });
  }

  get formControls() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const { name, email, password } = this.registerForm.value;

    this.registerForm.reset();
    this.submitted = false;
  }
}
