import {Injector} from 'angular2/core';
import {appInjector} from './app-injector';
import {AuthService} from '../services/auth.service';
import {Router, ComponentInstruction} from 'angular2/router';

export const isLoggedIn = (to: ComponentInstruction, from: ComponentInstruction) => {
	let injector: Injector = appInjector();
	let auth: AuthService = injector.get(AuthService);
	let router: Router = injector.get(Router);

	return new Promise((resolve) => {
	  auth.isAuth()
	      .subscribe((result) => {
					if (result) {
						resolve(true);
					} else {
						router.navigate(['/Login']);
						resolve(false);
					}
				});
    });
};
