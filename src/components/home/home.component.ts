import {Component} from 'angular2/core';
import {I18nPipe} from '../../pipes/i18n.pipe';

@Component({
  selector: 'login',
  templateUrl: 'template/home/home.html',
  pipes: [I18nPipe]
})
export class HomeComponent {}
