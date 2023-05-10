import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { ModernHistoryComponent } from './modern-history/modern-history.component';  
import { ProblemsComponent } from './problems/problems.component';
import { AboutComponent } from './about/about.component';
import { PopularCyphersComponent } from './popular-cyphers/popular-cyphers.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Главная страница'
    },
    {
        path: '/history',
        component: HistoryComponent,
        title: 'История криптографии'
    },
    {
        path: '/modern_history',
        component: ModernHistoryComponent,
        title: 'История современной криптографии'
    },
    {
        path: '/main_problems',
        component: ProblemsComponent,
        title: 'Основные проблемы криптографии'
    },
    {
        path: '',
        component: PopularCyphersComponent,
        title: 'Популярные шифры'
    },
    {
        path: '',
        component: AboutComponent,
        title: 'Об авторе'
      }
  ];
  
  export default routeConfig;