import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EmailInputComponent } from '../components/email-input/email-input.component';
import { ListContainerComponent } from '../components/list-container/list-container.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'start-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    EmailInputComponent,
    ListContainerComponent,
    RouterModule,
  ],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss',
})
export class StartPageComponent {
  subscribeEvent() {
    console.log('hej');
  }
}
