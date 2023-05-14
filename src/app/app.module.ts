import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularCyphersComponent } from './popular-cyphers/popular-cyphers.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { ProblemsComponent } from './problems/problems.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from "@angular/router";
import { SourcesComponent } from './sources/sources.component';
import { routes } from './app.routes';
import { ThemeButtonComponent } from './theme-button/theme-button.component';
import { ToTopButtonComponent } from './to-top-button/to-top-button.component';
import { FormsModule } from '@angular/forms';

/*@NgModule({
  imports: [
  BrowserModule,
],})*/

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    RouterModule,
    FormsModule
  ],
  providers: [],  
  declarations: [
    PopularCyphersComponent,
    HomeComponent,
    HistoryComponent,
    ProblemsComponent,
    AboutComponent,
    PageNotFoundComponent,
    SourcesComponent,    
  ],
})

export class AppModule { }
