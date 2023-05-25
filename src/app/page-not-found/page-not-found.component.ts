import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
<article>
  <section>
    <h2 align="center" class="m-4">Страница не найдена</h2>
    <p>
      Эта страница не найдена
    </p>
    <a routerLink="/">На главную</a> 
  </section>
</article>
  `,
  styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
