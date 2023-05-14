import { Routes, RouterModule  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { ProblemsComponent } from './problems/problems.component';
import { AboutComponent } from './about/about.component';
import { PopularCyphersComponent } from './popular-cyphers/popular-cyphers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SourcesComponent } from './sources/sources.component';

export const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      title: 'Главная страница'
    },
    {
        path: 'history',
        component: HistoryComponent,
        title: 'История криптографии'
    },
    {
        path: 'main_problems',
        component: ProblemsComponent,
        title: 'Проблемы криптографии'
    },
    {
        path: 'popular_cyphers',
        component: PopularCyphersComponent,
        title: 'Популярные шифры'
    },
    {
        path: 'sources',
        component: SourcesComponent,
        title: 'Источники информации'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'Об авторе'
    },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent },
  ];


  export const routing = RouterModule.forRoot(routes);

/*import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Home page'
  },
];

export default routeConfig;*/