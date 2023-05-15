import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-cyphers',
  template: `
<article>
  <section>  
    <h2 align="center">Популярные шифры и методы шифрования</h2>        
    <section>  
      <p class="my-3">В современном мире существует множество алгоритмов шифрования и хеш-функций. Ниже представлены одни из самых популярных.</p>
      <h3>Семейство алгоритмов хеширования SHA</h3>
      <p>Впервые SHA опубликовали в 1993 году, но вскоре после выявления недостатков алгоритма шифрования его заменил SHA-1. SHA-1 был разработан Агенством Национальной Безопасности США и первоначально использовался для цифровой подписи, но в 2010 году в нём тоже были найдены недостатки и настала эра SHA-2.</p>
      <p>SHA-2 – семейство двух похожих хэш-функций с разными размерами блоков, известных как SHA-256 и SHA-512. На сегодняшний день они являются самыми популярными алгоритмами, применяемыми для проверки контрольной суммы, установления защищённого соединения и т.п.</p>
      <div class="my-2">
        <h4>Хеширование SHA-256</h4>
        <label for="sha-256_field"><h5>Строка:&nbsp;</h5></label>
        <input name="sha-256_field" type="text" (change)="SHA_256()" [(ngModel)]="sha_256_field"/>
        <div>
          <h5>Результат: </h5><span>{{ sha_256_output }}</span>
        </div>        
      </div>
      <div class="my-2">
        <h4>Хеширование SHA-384</h4>
        <label for="sha-384_field"><h5>Строка:&nbsp;</h5></label>
        <input name="sha-384_field" type="text" (change)="SHA_384()" [(ngModel)]="sha_384_field"/>
        <div>
          <h5>Результат: </h5><span>{{ sha_384_output }}</span>
        </div>        
      </div>
      <h3>MD5</h3>
      <p>MD5 был разработан в 1991 году Рональдом Ривестом. Этот алгоритм также предназначался для создания «отпечатков» сообщения произвольной длины. В современное время практически вытеснен семейством SHA-2. Ключевым свидетельством начала заката эпохи MD5 свидетельствует его исключение из пула алгоритмов TLS 1.3 (хотя это вовсе не означает, что его перестанут использовать в ближайшие ~10-15 лет, так как, к примеру, львиная доля Интернета всё ещё работает на IPv4, несмотря на массовую популяризацию IPv6 и проблемы, связанные с устареванием IPv4).</p>
      <div class="my-2">
        <h4>Хеширование MD5</h4>
        <label for="md5_field"><h5>Строка:&nbsp;</h5></label>
        <input name="md5_field" type="text" (change)="MD5()" [(ngModel)]="md5_field"/>
        <div>
          <h5>Результат: </h5><span>{{ md5_output }}</span>
        </div>        
      </div>
      <h3>Base 64</h3>
      <p>Base 64 – это стандарт кодирования двоичных данных при помощи только 64 символов ASCII. Base64 был разработан Инженерным советом Интернета (англ. Internet Engineering Task Force, IETF). Впервые этот стандарт кодирования был описан в 1987 в RFC 989, а свое название получил в 1992. Часто именно Base 64 используется там, где нет возможности гарантировать бережного обращения с информацией (например, в протоколах прикладного уровня стека TCP/IP).</p>
      <div class="my-2">
        <h4>Хеширование Base64</h4>
        <label for="base64_field"><h5>Строка:&nbsp;</h5></label>
        <input name="base64_field" type="text" (change)="Base64()" [(ngModel)]="base64_field"/>
        <div>
          <h5>Результат: </h5><span>{{ base64_output }}</span>
        </div>        
      </div>
    </section>
    <section>  
      <div id="back">
        <a href="popular_cyphers#percent"><img src="assets/img/percent_icon.png" class="icon border-black" alt="Шифрование процентами" title="Шифрование процентами" ></a>&nbsp;
        <a href="popular_cyphers#vigener"><img src="assets/img/Vigenere_icon.png" class="icon border-black" alt="Шифр Виженера" title="Шифр Виженера"></a>&nbsp;
        <a href="popular_cyphers#transpozition"><img src="assets/img/transpozition_icon.png" class="icon border-black" alt="Транспозиция" title="Транспозиция"></a>&nbsp;
        <a href="popular_cyphers#skytale"><img src="assets/img/Skytale_icon.png" class="icon border-black" alt="Скитала" title="Скитала"></a>&nbsp;
        <a href="popular_cyphers#atbash"><img src="assets/img/atbash_icon.png" class="icon border-black" alt="Шифр атбаш" title="Шифр атбаш"></a>&nbsp;
        <a href="popular_cyphers#cesar"><img src="assets/img/cesar_icon.jpg" class="icon border-black" alt="Шифр Цезаря" title="Шифр Цезаря"></a>&nbsp;
        <a href="popular_cyphers#morze"><img src="assets/img/morze_icon.jpg" class="icon border-black" alt="Азбука Морзе" title="Азбука Морзе"></a>&nbsp;
        <a href="popular_cyphers#polibiy"><img src="assets/img/square.png" class="icon border-black" alt="Квадрат Полибия" title="Квадрат Полибия"></a>&nbsp;
        <a href="popular_cyphers#book"><img src="assets/img/book.png" class="icon border-black" alt="Шифровальная книга" title="Шифровальная книга"></a>&nbsp;
        <a href="popular_cyphers#disk"><img src="assets/img/disk_icon.png" class="icon border-black" alt="Диск Энея" title="Диск Энея"></a>&nbsp;
      </div>
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
      <div align="center">
        <a id="percent"></a>
        <h3 class="my-4">Метод шифрования «Процент»</h3>
        <p align="left">Этим методoм могут пользоваться двое или несколько человек, которые знают какой текст принят для кодирования в качестве исходного. Вычисляя процентное содержание в данном тексте каждой буквы алфавита и символа, можно легко прочитать посланную в виде чисел шифрограмму.</p>
        <p align="left"><i>Для примера в качестве исходного текста я взял моноголог Гамлета из пьесы Уильяма Шекспира «Гамлет»:</i></p>
        
        <div style="display: flex; width: 85%;">
          <div style="width: 48%; padding: 20px;"> 
            <p style="font-style:italic; font-size: 16px;">&nbsp;<br>
            Быть или не быть, вот в чем вопрос. Достойно ль<br>
            Смиряться под ударами судьбы,<br>
            Иль надо оказать сопротивленье<br>
            И в смертной схватке с целым морем бед<br>
            Покончить с ними? Умереть. Забыться.<br>
            И знать, что этим обрываешь цепь<br>
            Сердечных мук и тысячи лишений,<br>
            Присущих телу. Это ли не цель<br>
            Желанная? Скончаться. Сном забыться.<br>
            Уснуть… и видеть сны? Вот и ответ.<br>
            Какие сны в том смертном сне приснятся,<br>
            Когда покров земного чувства снят?<br>
            Вот в чем разгадка. Вот что удлиняет<br>
            Несчастьям нашим жизнь на столько лет.<br>
            А то кто снес бы униженья века,<br>
            Неправду угнетателей, вельмож<br>
            Заносчивость, отринутое чувство,  </p>
          </div>        
          <div style="width: 48%; padding: 20px;">
            <p style="font-style:italic; font-size: 16px;">&nbsp;<br>
            Нескорый суд и более всего<br>
            Насмешки недостойных над достойным,<br>
            Когда так просто сводит все концы<br>
            Удар кинжала! Кто бы согласился,<br>
            Кряхтя, под ношей жизненной плестись,<br>
            Когда бы неизвестность после смерти,<br>
            Боязнь страны, откуда ни один<br>
            Не возвращался, не склоняла воли<br>
            Мириться лучше со знакомым злом,<br>
            Чем бегством к незнакомому стремиться!<br>
            Так всех нас в трусов превращает мысль,<br>
            И вянет, как цветок, решимость наша<br>
            В бесплодье умственного тупика,<br>
            Так погибают замыслы с размахом,<br>
            В начале обещавшие успех,<br>
            От долгих отлагательств. Но довольно!<br>
            Офелия! О радость! Помяни<br>
            Мои грехи в своих молитвах, нимфа.</p>
          </div>
        </div>
        <p align="left"><i>В результате  получил таблицу соответствия "Символ - Процент".</i> </p>
        <img src="assets/img/percent.png" width="80%" class="border-black scale" alt="Шифр процентов" title="Шифр процентов"><br>
        <p align="left">Зашифрованный текст:</p>
        <p align="left"><i>В соответствии с этим кодом я зашифровал текст в виде чисел.</i></p>
        <p align="left"><i> Буду рад, если вы сумеете прочитать зашифрованный ниже текст и проверить результат.</i></p>
        <p style="overflow: auto">
          4.13%9.53%0.88%&nbsp;2.65%2.36(2)%2.65%2.36(2)%&nbsp;<br>7.27%6.39%4.13%2.26%1.18%&nbsp;1.47%7.47%7.27%7.76%6.78%2.26%1.18%&nbsp;<br>1.87%3.14%6.39%4.52%5.7%3.63%,&nbsp;3.25%9.53%1.38%2.65%6.39%&nbsp;6.78%7.47%&nbsp;4.52%&nbsp;<br>0.88%2.36(1)%7.76%3.25%2.36(1).&nbsp;9.53%6.78%&nbsp;<br>2.36(1)%4.52%6.39%0.59%6.39%7.76%3.54%&nbsp;7.27%7.47%1.57%2.36(2)%&nbsp;<br>1.67%6.39%7.27%7.76%6.39%4.52%5.7%3.63%.&nbsp;5.7%&nbsp;3.63%2.36(1)%1.47%0.88%7.47%&nbsp;<br>4.52%2.26%2.65%2.36(1)4.13%6.39%7.76%3.54%&nbsp;6.78%7.47%&nbsp;4.13%9.53%1.38%.
        </p>
        <p>Формат: Пробел после слова, точки или запятой. Большая буква после точки.</p>      
        <button id="submit" class="border-black" type="submit" (click)="TryPercent()">Ответ</button>
        <div id="hidden1" *ngIf="percentResult">Ты молодец!&nbsp;<img src="assets/img/smile.png" width="60"></div>
        <p align="left"><em>Таким образом, зная исходный текст и метод кодирования, положенный в основу, можно читать или отправлять любые сообщения понятные только посвященным людям.</em></p>
      </div>
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->        
      <div align="center">
        <a name="vigener"></a>
        <h3>Шифр Виженера</h3>  
        <p> <img src="assets/img/Vigenere.jpg" class="border-black scale" alt="Шифр Виженера" title="Шифр Виженера" width="50%"></p>
        <p align="left">  Метод шифрования:</p>
        <p align="left"><em>Шифруемое слово шифруется с помощью ключевого слова (подробное описание см. <a routerLink="/history">историю шифров</a>).</em></p>
      </div>
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->      
      <div align="center" >
        <a id="transpozition"></a>           
        <h3>Транспозиция</h3><br>
        <div style="display: flex; width: 85%;">
          <div style="width: 48%; padding: 20px;"> 
            <p class="left">
              Исходный текст:<br>
              <br>
              Подруга дней моих суровых,<br>
              Голубка дряхлая моя!<br>
              Одна в глуши лесов сосновых<br>
              Давно, давно ты ждешь меня.
            </p>
          </div>  
          <div style="width: 48%; padding: 20px;"> 
            <p class="left">
              Зашифрованный текст:<br>
              <br>
              агурдоП йенд хиом хыворус<br>
              акбулоГ яалхярд яом!<br>
              андО в ишулг восел хывонсос<br>
              онваД, онвад ыт ьшедж янем.
            </p>
          </div>
        </div> 
        <div align="center">
          <p> Способ шифрования: <i>Слова в предложении начинаются с конца.</i></p>
        </div>
      </div>
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->        
      <div align="center">
        <a id="skytale"></a>
        <h3>Скитала</h3>
        <p><img src="assets/img/Skytale.png" width="30%" alt="Скитала" title="Скитала"  class="scale"></p>              
          <pre style="margin-left: 100px;">  | | | | | | | | | | | | | | | | | | |
  | |В| |и|г|р|е| |е|е| |к|о|н|н|ы|й| |
  | |н|е| |с|л|о|в|и|т|,| | | | | | | |
  | |В| |б|е|д|е| |—| |н|е| | | | | | |
  | |с|р|о|б|е|е|т|,|—| |с|п|а|с|е|т| |
  | |К|о|н|я| |н|а| |с|к|а|к|у| | | | |
  | |о|с|т|а|н|о|в|и|т|,| | | | | | | |
  | |В| |г|о|р|я|щ|у|ю| |и|з|б|у| | | |
  | |в|о|й|д|е|т|!| | | | | | | | | | |
  | | | | | | | | | | | | | | | | | | |</pre>
        <p class="left">Метод шифрования:</p>
        <div class="left">
          <i>
            <ol>
                <li><p>Первые n символов выписываются в первую строку слева направо;</p></li>
                <li><p>Следующие n символов выписываем во вторую строчку пока её не заполним и т.д.;</p></li>
                <li><p>Если все символы выписаны, а остались незаполненные ячейки, заполняем их пробелами или любыми другими символами по договоренности;</p></li>
                <li><p>Если выписаны не все символы, а таблица заполнена, значит, при выборе размеров допущена ошибка;</p></li>
                <li><p>Теперь разворачиваем текст по столбцам.</p></li>
            </ol>
          </i>
        </div>
      </div>
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->         
      <div align="center">
        <a id="atbash"></a>
        <h3>Атбаш</h3>
        <p><img src="assets/img/atbash.png" width="80%" class="border-black scale" alt="Шифр атбаш" title="Шифр атбаш"></p>
        <p class="left">
          Метод шифрования:<br>
          <i>Алфавит начинается с конца.</i>
        </p>
      </div>
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->         
      <div align="center">
          <p>&nbsp;</p>
              <a id="cesar"></a>
              <h3>Шифр Цезаря</h3><br>
              <p>(В примере использовался ROT3)</p>
                <img src="assets/img/cesar.png" width="80%" class="border-black scale" alt="Шифр Цезаря" title="Шифр Цезаря">
              <p>&nbsp;</p><br>
              <p class="left">
              Метод шифрования:<br>  
              <i>В зависимости от ROT (сдвига) сдвигается определённое количество букв (на это зависит буква на конце).</i>
              </p>  
              <p>&nbsp;</p>
      </div>
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
      <div align="center">
        <a id="morze"></a>
        <h2>Азбука Морзе</h2>
        <img src="assets/img/morze.jpg" alt="Азбука Морзе" title="Азбука Морзе" width="50%" class="border-black scale"><br>
        <p class="left">
          Метод шифрования:<br>
          <i>Буквы шифруются с помощью точек и тире.</i>
        </p>
      </div>
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->    
      <div align="center">
        <a id="polibiy"></a>
        <h3>Квадрат Полибия</h3>
        <p><img src="assets/img/polibiy.png" alt="Квадрат Полибия" title="Квадрат Полибия" width="40%" class="border-black scale"></p>
        <p class="left">
          Метод шифрования:<br>
          <i>Буква соответствует верхнему и нижнему числу.</i>
        </p>
      </div>
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
      <div align="center">
        <a id="book"></a>
        <h3>Шифровальная книга</h3>
        <p><img src="assets/img/book.png" class="scale" width="20%"></p>
        <p class="left">
          Метод шифрования:<br>
          <i>В книге записываются слова и их зашифрованные значения.<br>
          (Также могут использоваться коды).</i>
        </p>       
      </div>
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
      <div align="center">
        <a id="disk"></a>
        <h3>Диск Энея</h3>
        <p><img src="assets/img/disk.png" alt="Диск Энея" title="Диск Энея" width="20%" class="scale"></p>
        <p class="left">
          Метод шифрования:<br>
          <i>Поочерёдное протягивание свободного конца нити через отверстия, которые обозначают нужную букву шифруемого слова.</i>
        </p>
      </div> 
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->         
    </section> 
  </section>
</article>
  `,
  styleUrls: ['./popular-cyphers.component.sass']
})
export class PopularCyphersComponent implements OnInit {
  sha_256_field: string = '';
  sha_256_output: string = '';

  sha_384_field: string = '';
  sha_384_output: string = '';

  md5_field: string = '';
  md5_output: string = '';

  base64_field: string = '';
  base64_output: string = '';

  percentResult: boolean = false;

  TryPercent() {
    let rightText = "Мой дядя самых честных правил, когда не в шутку занемог. Он уважать себя заставил. И лучше выдумать не мог.";
    let result = prompt('Перевод:'); 
    if (result == rightText) {
      this.percentResult = true;
    } else {
      this.percentResult = false;
      alert('Неправильно!');
    }
  }

  constructor() { }

  SHA_256() {
    var toEncode = this.sha_256_field;    
    fetch('https://md5calc.com/hash/sha256.json/'+encodeURIComponent(toEncode), {method: 'GET'}).then((e)=>e.json()).then((e)=>{console.log(e);this.sha_256_output = e});
  }

  SHA_384() {
    var toEncode = this.sha_384_field;    
    fetch('https://md5calc.com/hash/sha384.json/'+encodeURIComponent(toEncode), {method: 'GET'}).then((e)=>e.json()).then((e)=>{console.log(e);this.sha_384_output = e});
  }

  MD5() {
    var toEncode = this.md5_field;    
    fetch('https://md5calc.com/hash/md5.json/'+encodeURIComponent(toEncode), {method: 'GET'}).then((e)=>e.json()).then((e)=>{console.log(e);this.md5_output = e});
  }

  Base64() {
    var toEncode = this.base64_field;    
    fetch('https://md5calc.com/base64/enc.json/'+encodeURIComponent(toEncode), {method: 'GET'}).then((e)=>e.json()).then((e)=>{console.log(e);this.base64_output = e});
  }

  ngOnInit(): void {
  }

}