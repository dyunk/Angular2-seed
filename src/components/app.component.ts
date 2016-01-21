import {Component, OnInit, enableProdMode} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {HomeComponent} from './home/home.component';
import {HeroComponent} from './hero/hero.component';
import {LoginComponent} from './auth/login.component';
import {LoggedInRouterOutlet} from '../directives/logged-in-outlet.directive';
import {I18nPipe} from '../pipes/i18n.pipe';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

@Component({
    selector: 'app',
    templateUrl: 'template/main.html',
    directives: [LoggedInRouterOutlet, ROUTER_DIRECTIVES],
    pipes: [I18nPipe]
})
@RouteConfig([
  {path:'/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path:'/hero/...', name: 'Hero', component: HeroComponent},
  {path:'/login', name: 'Login', component: LoginComponent}
])
export class AppComponent {

  locale:string;

  constructor (private _http: Http, private _router:Router) {
    this.locale = localStorage.getItem('locale');
    if (this.locale === undefined || this.locale === null) {
      this.loadTexts('es');
    }
  }

  selectLocale (locale:string) {
    this.loadTexts(locale);
    setTimeout(function() {
      window.location.reload(true);
    }, 500);
  }

  private loadTexts (locale:string) {
    this.locale = locale;
    this._http.get('locales/'+locale+'.json')
      .map(res => res.text())
      .subscribe(json => {
        localStorage.setItem('locale', locale);
        localStorage.setItem('texts', json);
      });
  }

}
