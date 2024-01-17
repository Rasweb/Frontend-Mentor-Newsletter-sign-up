import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'list-container',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss'],
})
export class ListContainerComponent {}
