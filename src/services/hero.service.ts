import {Injectable, OnInit} from 'angular2/core';
import {Hero} from '../dtos/hero';
import {Page} from '../dtos/page';

@Injectable()
export class HeroService {

  private list:Hero[] = [
    {"id": 1, "name": "Mr. Nice", "desc":"desc Mr. Nice"},
    {"id": 2, "name": "Narco", "desc":"desc Narco"},
    {"id": 3, "name": "Bombasto", "desc":"desc Bombasto"},
    {"id": 4, "name": "Celeritas", "desc":"desc Celeritas"},
    {"id": 5, "name": "Magneta", "desc":"desc Magneta"},
    {"id": 6, "name": "RubberMan", "desc":"desc RubberMan"},
    {"id": 7, "name": "Dynama", "desc":"desc Dynama"},
    {"id": 8, "name": "Dr IQ", "desc":"desc Dr IQ"},
    {"id": 9, "name": "Magma", "desc":"desc Magma"},
    {"id": 10, "name": "Tornado", "desc":"desc Tornado"},
    {"id": 11, "name": "Mr. Nice 2", "desc":"desc Mr. Nice 2"},
    {"id": 12, "name": "Narco 2", "desc":"desc Narco 2"},
    {"id": 13, "name": "Bombasto 2", "desc":"desc Bombasto 2"},
    {"id": 14, "name": "Celeritas 2", "desc":"desc Celeritas 2"},
    {"id": 15, "name": "Magneta 2", "desc":"desc Magneta 2"},
    {"id": 16, "name": "RubberMan 2", "desc":"desc RubberMan 2"},
    {"id": 17, "name": "Dynama 2", "desc":"desc Dynama 2"},
    {"id": 18, "name": "Dr IQ 2", "desc":"desc Dr IQ 2"},
    {"id": 19, "name": "Magma 2", "desc":"desc Magma 2"},
    {"id": 20, "name": "Tornado 2", "desc":"desc Tornado 2"}
  ];

  getHeroes(page: number, items: number) {
    let maxPage = Math.floor(this.list.length / items) - 1;
    if (this.list.length % items !== 0) {
      maxPage++;
    }
    let index = items * Math.min(page, maxPage);
    let result:any = {};
    result["records"] = new Array<Hero>();
    for (var i = 0; i < items; i++) {
      if (this.list[index + i] !== undefined) {
        result.records.push(this.list[index + i]);
      }
    }
    result["page"] = {
      actual: page,
      firts: 0,
      last: maxPage,
      recordsPerPage: items,
      totalRecords: this.list.length
    };
    return result;
  }

  getHero(id: number | string) {
    var hero:Hero;
    for (var i = 0; i < this.list.length; i++) {
      hero = this.list[i];
      if (hero.id == id) {
        return hero;
      }
    }
    return null;
  }
}
