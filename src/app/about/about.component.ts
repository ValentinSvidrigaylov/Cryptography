import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <article>
    <section>
      <h2 align="center" class="m-4">Об авторе</h2>
      <p>Мне 15 лет, в свободное от учёбы время занимаюсь веб-разработкой уже примерно 3 года. В основном самоучка, освоил фреймворки и библиотеки: React, Next, Angular, Vue3, Nuxt, NodeJS (+Express), jQuery, JS, Sass, Scss, Less, PHP, Python (FastAPI, Flask), C-подобные, семейство языков SQl и некоторые другие языки. Несмотря на это, софт скиллы всё ещё на уровне джуна. Также иногда делаю разные проекты на базе Arduino Uno, изучаю нейронные сети, создаю игры на Unity, ботов на Python (и ещё кучу всего, что только может прийти в голову).</p>
      <div class="social-media">
        <a href="https://vk.com/fanatsvidrigaylova" target="_blank" title="Мой вк">Вк</a>
      </div>
    </section>
  </article>
  `,
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
