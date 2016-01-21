import {Injectable, OnInit} from 'angular2/core';

const JWT_KEY = "JWT";

@Injectable()
export class AuthService implements OnInit {

  private user : any;

  constructor() {}

  ngOnInit() {
    this.user = localStorage.getItem(JWT_KEY);
  }

  isAuth() {
    return !!localStorage.getItem(JWT_KEY);
  }

  getUser() {
    return this.user;
  }

  login(username, password) {
    let token = 'loged';
    localStorage.setItem(JWT_KEY, token);
    return token;
  }

  logout() {
    localStorage.removeItem(JWT_KEY);
    this.user = null;
  }
}
