import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'email-input',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
})
export class EmailInputComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  // Makes the this.router property available in the component
  constructor(private router: Router) {}

  submitEvent() {
    if (
      this.emailFormControl.errors === null &&
      this.emailFormControl.status === 'VALID'
    ) {
      this.router.navigate(['/last', this.emailFormControl.value]);
    }
  }
}
