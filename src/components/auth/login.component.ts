import {Component} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';

import {AuthService} from '../../services/auth.service';
import {AuthToken} from '../../dtos/auth-token';
import {I18nPipe} from '../../pipes/i18n.pipe';

@Component({
  selector: 'login',
  templateUrl: 'template/auth/login.html',
  directives: [RouterLink],
  pipes: [I18nPipe]
})

export class LoginComponent {

  constructor(
    private _router: Router,
    private _authService: AuthService) {}

  login(event, username, password) {
    event.preventDefault();
    var jwt = this._authService.login(username, password);
    this._router.navigate(['Hero']);
  }

  signup(event) {
    event.preventDefault();
    this._router.navigate(['Signup']);
  }
}
