import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="theme-button-cover">
      <button class="theme-toggle" id="theme-toggle" title="Сменить тему" aria-label="light" aria-live="polite"></button>
    </div>
    <script src="../../js/theme-button.js"></script>
  `,
  styleUrls: ['./theme-button.component.sass']
})
export class ThemeButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
