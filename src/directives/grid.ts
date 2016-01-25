import {Component, Injectable, EventEmitter} from 'angular2/core';
import {Column} from '../dtos/column';
import {UtilService} from '../services/util.service';
import {Page} from '../dtos/page';
import {Filters} from '../dtos/filters';
import {I18nPipe} from '../pipes/i18n.pipe';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'grid',
    inputs: ['rows: rows','columns: columns','page: page', 'options: options',
      'enableSort: enableSort', 'enableFilter: enableFilter'],
    outputs: ['rowSelected', 'pageChanged', 'sortSelected', 'filterChanged'],
    templateUrl: 'template/directives/grid.html',
    providers: [UtilService],
    pipes: [I18nPipe],
})
export class Grid {

  public page: Page;
  public rowSelected: EventEmitter<any>;
  public pageChanged: EventEmitter<any>;
  public sortSelected: EventEmitter<any>;
  public filterChanged: EventEmitter<any>;
  public columns: Array<Column>;
  public rows: Array<any>;
  public direction: string;
  public enableSort: boolean;
  public key: string;
  public enableFilter: boolean;
  public options: any;

  constructor() {
    this.rowSelected = new EventEmitter();
    this.pageChanged = new EventEmitter();
    this.sortSelected = new EventEmitter();
    this.filterChanged = new EventEmitter();
    //this.enableSort = false;
    //this.enableFilter = false;
  }

  select(row) {
    this.rowSelected.emit(row);
  }

  filter(value, field) {
    this.filterChanged.emit({field:field, value:value});
  }

  sort(key) {
    if (this.enableSort) {
      if (this.direction === 'asc') {
        this.direction = 'desc';
      } else {
        this.direction = 'asc';
      }
      this.sortSelected.emit({direction:this.direction, key:key});
    }
  }

  goTo(num) {
    this.pageChanged.emit({page:num});
  }

}
