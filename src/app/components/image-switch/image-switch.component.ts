import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'image-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-switch.component.html',
  styleUrl: './image-switch.component.scss',
})
export class ImageSwitchComponent implements OnInit {
  isMobile = false;
  isDesktop = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        this.isMobile =
          result.matches &&
          (result.breakpoints[Breakpoints.XSmall] ||
            result.breakpoints[Breakpoints.Small]);
        this.isDesktop =
          result.matches &&
          (result.breakpoints[Breakpoints.Medium] ||
            result.breakpoints[Breakpoints.Large] ||
            result.breakpoints[Breakpoints.XLarge]);
        this.cdr.detectChanges();
      });
  }
}
