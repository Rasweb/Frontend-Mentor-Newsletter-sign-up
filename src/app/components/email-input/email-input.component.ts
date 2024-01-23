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

  submitEvent() {
    console.log('hej', this.emailFormControl);
    console.log('errors', this.emailFormControl.errors);
    console.log('status', this.emailFormControl.status);

    if (
      this.emailFormControl.errors === null &&
      this.emailFormControl.status === 'VALID'
    ) {
      console.log('All Good');
      // TODO: Send user to /last and also send the emailFormControl.value
    }
  }
}
