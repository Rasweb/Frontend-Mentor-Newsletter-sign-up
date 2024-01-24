import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'last-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './last-page.component.html',
  styleUrl: './last-page.component.scss',
})
export class LastPageComponent implements OnInit {
  receivedEmail: string | null = null;

  // Makes the ActivatedRoute class available in the component
  constructor(private route: ActivatedRoute, private router: Router) {}

  // Runs after the component has been created
  // For initialization logic
  ngOnInit() {
    // * this.route = From ActivatedRoute
    // * snapshot = Represents the current state of the route when ActivatedRoute was created.
    // * paramMap = Contains the parameters of the route.
    this.receivedEmail = this.route.snapshot.paramMap.get('email') ?? null;
  }
  dismissEvent() {
    this.router.navigate(['/']);
  }
}
