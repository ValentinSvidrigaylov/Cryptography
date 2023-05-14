import { Component, OnInit, Input, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-fwd-bwd-button',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
  <div class="outer_fixed_nav">
    <div class="hide_fixed_nav">
      <button (click)="HideButtons()">Скрыть/Показать</button>
    </div>
    <div class="fixed_nav">
      <a [routerLink]="url_back" class="nav-link">Назад</a>
      <div class="vertical_line"></div>
      <a [routerLink]="url_home" class="nav-link">Оглавление</a>
      <div class="vertical_line"></div>
      <a [routerLink]="url_forth" class="nav-link">Вперёд</a>
    </div>
  </div>`,
  styleUrls: ['./fwd-bwd-button.component.sass']
})
export class FwdBwdButtonComponent implements OnInit {
  window: any;

  currentRoute: string;
  url_home: string;
  url_back: string;
  url_forth: string;
  urls: string[];
  //@Input() asd: string;
  //@Input() urls: string[];  
  
  HideButtons() {
    Array.from(document.getElementsByClassName('fixed_nav') as HTMLCollectionOf<HTMLElement>).forEach((e)=>{e.style.display = e.style.display == 'block' ? 'none' : 'block'})    
  }

  constructor(private router: Router, @Inject(DOCUMENT) private _document: any) {
    this.window = this._document.defaultView
    console.log(this.window.pageYOffset)
    window.addEventListener('scroll', function() {
 
      if (this.window.pageYOffset >= 250) {
          
          // do something when scrolling down
      }
  
      if (this.window.pageYOffset < 250) {

          // do something when scrolling up, and enable the scroll-down event to fire once again
      }
    });


    this.urls = ['/home','/history','/main_problems','/popular_cyphers','/sources','/about'];
    console.log(this.urls);
    this.currentRoute = "";
    this.url_home = this.urls[0];
    this.url_back = this.urls[this.urls.indexOf(location.pathname)-1 > 0 ? this.urls.indexOf(location.pathname)-1 : -1];
    this.url_forth = this.urls[this.urls.indexOf(location.pathname)+1 < this.urls.length ? this.urls.indexOf(location.pathname)+1 : 0];
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
            // Show progress spinner or progress bar
            console.log('Route change detected');
        }

        if (event instanceof NavigationEnd) {
            // Hide progress spinner or progress bar
            this.currentRoute = event.url;          
            console.log(event);
            this.url_back = this.urls[this.urls.indexOf(location.pathname) > 0 ? this.urls.indexOf(location.pathname)-1 : this.urls.length-1];
            this.url_forth = this.urls[this.urls.indexOf(location.pathname)+1 < this.urls.length ? this.urls.indexOf(location.pathname)+1 : 0];
        }

        if (event instanceof NavigationError) {
             // Hide progress spinner or progress bar

            // Present error to user
            console.log(event.error);
        }
    });
  }

  ngOnInit(): void {
  } 

}