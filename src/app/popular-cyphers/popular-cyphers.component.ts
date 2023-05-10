import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-cyphers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      popular-cyphers works!
    </p>
  `,
  styleUrls: ['./popular-cyphers.component.sass']
})
export class PopularCyphersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
