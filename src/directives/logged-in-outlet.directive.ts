import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';

// TODO: pasar a constante global, tambien se usa en auth.service
const JWT_KEY = 'JWT';

@Directive({
  selector: 'logged-in-router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet {

  private _publicRoutes:any;

  constructor(_elementRef:ElementRef, _loader:DynamicComponentLoader,
      private _router:Router, @Attribute('name') nameAttr:string) {

    super(_elementRef, _loader, _router, nameAttr);

    this._publicRoutes = {
      '/login': true,
      '/signup': true
    };
  }

  activate(instruction: ComponentInstruction) {
    var url = this._router.lastNavigationAttempt;

    if (!this._publicRoutes[url] && !localStorage.getItem(JWT_KEY)) {
      console.warn('user is not loged');
      this._router.navigate(['Login']);
    }

    return super.activate(instruction);
  }
}
