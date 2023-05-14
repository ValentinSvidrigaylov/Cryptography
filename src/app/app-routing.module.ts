import { NgModule, Injectable } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TitleStrategy, RouterStateSnapshot, RouterModule, Routes } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`App | ${title}`);
    }
  }
}

@NgModule({
  imports: [ BrowserModule],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})

export class AppRoutingModule { }
