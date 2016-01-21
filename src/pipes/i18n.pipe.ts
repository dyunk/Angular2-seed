import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'i18n'})
export class I18nPipe implements PipeTransform {
  transform(value:string, args:string[]):any {
    var texts = localStorage.getItem('texts');
    var result = JSON.parse(texts)[value];
    if (!result) {
      result = value;
    }
    return result;
  }
}
