import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Hero} from '../../dtos/hero';
import {HeroService} from '../../services/hero.service';
import {I18nPipe} from '../../pipes/i18n.pipe';

@Component({
    selector: 'hero-detail',
    templateUrl: 'template/hero/hero-detail.html',
    directives: [HeroDetailComponent],
    providers: [HeroService],
    inputs: ['hero'],
    pipes: [I18nPipe]
})

export class HeroDetailComponent implements OnInit {
    public hero: Hero;

    constructor(
        private _router:Router,
        private _routeParams:RouteParams,
        private _service:HeroService) {
    }

    ngOnInit() {
        let id = this._routeParams.get('id');
        this.hero = this._service.getHero(id);
    }

    gotoHeroes() {
        this._router.navigate(['Heroes']);
    }
}
