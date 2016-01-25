import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, CanActivate, ComponentInstruction} from 'angular2/router';

import {HeroDetailComponent} from './hero-detail.component';
import {HeroListComponent} from './hero-list.compontent';
import {isLoggedIn} from '../../filters/is-logged-in';

@Component({
    selector: 'hero',
    template:  `
    <h2>Hero Center</h2>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/', name: 'Heroes', component: HeroListComponent, useAsDefault: true},
  {path:'/:id', name: 'HeroDetail', component: HeroDetailComponent},
])
@CanActivate((to: ComponentInstruction, from: ComponentInstruction) => {
  return isLoggedIn(to, from);
})
export class HeroComponent { }
