import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeroDetailComponent} from './hero-detail.component';
import {HeroListComponent} from './hero-list.compontent';
import {LoggedInRouterOutlet} from '../../directives/logged-in-outlet.directive';

@Component({
    selector: 'hero',
    template:  `
    <h2>Hero Center</h2>
    <logged-in-router-outlet></logged-in-router-outlet>
  `,
    directives: [LoggedInRouterOutlet, ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/', name: 'Heroes', component: HeroListComponent, useAsDefault: true},
  {path:'/:id', name: 'HeroDetail', component: HeroDetailComponent},
])
export class HeroComponent { }
