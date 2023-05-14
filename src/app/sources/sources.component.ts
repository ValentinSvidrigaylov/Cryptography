import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sources',
  template: `
  <article>
    <section>         
    <h2 align="center"> Источники информации</h2>
        <div id="info">
            <a href="https://bse.slovaronline.com" class="white-h" target="_blank" title="Большая Советская Энциклопедия"><img src="../assets/img/soviet.png" width="100" class="frame"></a>
            <a href="https://ru.wikipedia.org" class="white-h " target="_blank"><img src="../assets/img/wikipedia.png" title="wikipedia" width="100" class="frame"></a>
            <a href="http://cryptowiki.net/index.php" class="white-h" target="_blank"><img src="../assets/img/keys.png" title="cryptowiki" class="frame"></a>
            <a href="https://www.techtarget.com/" class="white-h" target="_blank"><img src="../assets/img/techtarget.png" title="fandom" width="100" class="frame"></a>
            <a href="https://tproger.ru/translations/understanding-cryptography/" class="white-h" target="_blank"><img src="../assets/img/tp.png" title="tproger" target="_blank" class="frame"></a>
        </div>
    </section>
  </article>
  `,
  styleUrls: ['./sources.component.sass']
})
export class SourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
