import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { ThemeButtonComponent } from './theme-button/theme-button.component';
import { FwdBwdButtonComponent } from './fwd-bwd-button/fwd-bwd-button.component';
import { ToTopButtonComponent } from './to-top-button/to-top-button.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  imports: [
    RouterModule,
    ThemeButtonComponent,
    FwdBwdButtonComponent,
    ToTopButtonComponent
  ],
  
  template: ``,
  standalone: true,
})


export class AppComponent {
  title = 'Cryptography';
  nav_urls: string[] = ['/home','/history','/main_problems'];
  a_asd: string = 'asd';
}
/*
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [    
    RouterModule,
  ],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'homes';
}


*/