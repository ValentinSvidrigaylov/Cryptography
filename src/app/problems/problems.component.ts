import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-problems',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      problems works!
    </p>
  `,
  styleUrls: ['./problems.component.sass']
})
export class ProblemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
