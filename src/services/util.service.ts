import {Injectable} from 'angular2/core';

@Injectable()
export class UtilService {

  static dateRenderer(params) {
    let result = '';
    if (params.value) {
      result = this.dateFormat(params.value);
    }
    return result;
  }

  static dateFormat(value) {
    let result = '';
    if (value) {
      let fecha = new Date(value);
      let date = fecha.getDate();
      let month = fecha.getMonth() + 1;
      result = (date < 10 ? "0" + date : date) + "/" + (month < 10 ? "0" + month : month)  + "/" + fecha.getFullYear();
    }
    return result;
  }

  static isValidDate(d) {
    if ( Object.prototype.toString.call(d) !== "[object Date]" )
      return false;
    return !isNaN(d.getTime());
  }

}
