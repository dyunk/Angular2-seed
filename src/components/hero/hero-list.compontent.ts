import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from '../../dtos/hero';
import {HeroService} from '../../services/hero.service';
import {Grid} from '../../directives/grid';
import {Page} from '../../dtos/page';
import {Filters} from '../../dtos/filters';
import {I18nPipe} from '../../pipes/i18n.pipe';
import {KeyValuePair} from '../../dtos/keyValuePair';

@Component({
    templateUrl: 'template/hero/hero-list.html',
    directives: [HeroListComponent, Grid],
    providers: [HeroService],
})
export class HeroListComponent implements OnInit {

  public heroes: Hero[];
  public columnDefs: Object[];
  public page: Page;
  public filters: Filters;
  public enableSort: boolean;
  public enableFilter: boolean;
  public options: any[];

  constructor(
      private _router: Router,
      private _heroService: HeroService) {
  }

  ngOnInit() {
    this.enableSort = false;
    this.enableFilter = false;
    this.page = {
      actual: 0,
      firts: 0,
      last: 0,
      recordsPerPage: 4,
      totalRecords: 0
    };
    this.options = [];

    this.columnDefs = [
      {headerName: "ID", field: "id", width: 150, filter:"text"},
      {headerName: "Name", field: "name", width: 150, filter:"text"},
      {headerName: "Description", field: "desc", width: 200, filter:"text"}
    ];
    this.loadData();
  }

    /* eventos de la directiva Grid */
  onRowSelected(event:any) {
    this._router.navigate( ['HeroDetail', {id: event.id}] );
  }

  onPageChanged(event:any) {
    this.page.actual = event.page;
    this.loadData();
  }

  onSortSelected(event:any) {
    // TODO
  }

  onFilterChanged(event:any) {
    // TODO
  }
/* fin eventos de la diretiva Grid */


  private loadData() {
    var result = this._heroService.getHeroes(this.page.actual, this.page.recordsPerPage);
    this.heroes = result.records;
    this.page = result.page;
  }
}
