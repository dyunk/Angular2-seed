import {bootstrap}    from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './components/app.component';
import {AuthService} from './services/auth.service';
import {appInjector} from './filters/app-injector';

bootstrap(AppComponent, [AuthService,
  ROUTER_PROVIDERS, HTTP_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]).then((appRef) => {
  // store a reference to the injector
  appInjector(appRef.injector);
});
