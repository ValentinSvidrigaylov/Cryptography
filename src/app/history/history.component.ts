import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      history works!
    </p>
  `,
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
