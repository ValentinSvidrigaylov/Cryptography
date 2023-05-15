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
      <ng-template [ngIf]="showBack">
        <a [routerLink]="url_back" class="nav-link">Назад</a>
        <div class="vertical_line"></div>
      </ng-template>
      <a [routerLink]="url_home" class="nav-link">Оглавление</a>
      <ng-template [ngIf]="showForth">
        <div class="vertical_line"></div>
        <a [routerLink]="url_forth" class="nav-link">Вперёд</a>
      </ng-template>
    </div>
  </div>`,
  styleUrls: ['./fwd-bwd-button.component.sass']
})
export class FwdBwdButtonComponent implements OnInit {
  window: any;

  currentRoute: string;
  currentRouteRaw: string;
  url_home: string;
  url_back: string;
  url_forth: string;
  urls: string[];
  reduced: boolean;

  tTrue: boolean = true;

  showBack: boolean = true;
  showForth: boolean = true;
  //@Input() reduced: boolean;
  //@Input() urls: string[];  
  
  HideButtons() {
    Array.from(document.getElementsByClassName('fixed_nav') as HTMLCollectionOf<HTMLElement>).forEach((e)=>{e.style.display = e.style.display == 'none' ? 'block' : 'none'})    
  }

  CheckIndexes() {
    if (this.reduced) {
      if (this.url_back == this.urls[this.urls.length-1]) {
        this.showBack = false;
      } else {
        this.showBack = true;
      }

      if (this.url_forth == this.urls[0]) {
        this.showForth = false;
      } else {
        this.showForth = true;
      }
    }
  }

  constructor(private router: Router) {
    this.reduced = true;
    this.urls = ['/home','/history','/main_problems','/popular_cyphers','/sources','/about'];
    console.log(this.urls);
    this.currentRoute = location.pathname.match(/[\w/]*\/(\w*)/i)![1] || '';
	this.currentRouteRaw = location.pathname;
    this.url_home = this.urls[0];
    this.url_back = this.urls[this.urls.indexOf(location.pathname)-1 > 0 ? this.urls.indexOf(location.pathname)-1 : -1];
    this.url_forth = this.urls[this.urls.indexOf(location.pathname)+1 < this.urls.length ? this.urls.indexOf(location.pathname)+1 : 0];
    this.CheckIndexes();
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
            // Show progress spinner or progress bar
            console.log('Route change detected');
        }

        if (event instanceof NavigationEnd) {
            // Hide progress spinner or progress bar
            this.currentRouteRaw = event.url;
			this.currentRoute = this.currentRouteRaw.match(/[\w/]*(\/\w*)/i)![1] || '';
			console.log(this.currentRouteRaw);
			console.log(this.currentRoute);
            console.log(event);
            this.url_back = this.urls[this.urls.indexOf(this.currentRoute) > 0 ? this.urls.indexOf(this.currentRoute)-1 : this.urls.length-1];
            this.url_forth = this.urls[this.urls.indexOf(this.currentRoute)+1 < this.urls.length ? this.urls.indexOf(this.currentRoute)+1 : 0];

            this.CheckIndexes();
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