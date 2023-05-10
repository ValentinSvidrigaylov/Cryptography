import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modern-history',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      modern-history works!
    </p>
  `,
  styleUrls: ['./modern-history.component.sass']
})
export class ModernHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
