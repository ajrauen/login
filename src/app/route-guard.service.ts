import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { LoginService } from './modules/login/services/login.service';


@Injectable()
export class RouteGuardService implements CanActivate {

  private login$: Observable<any>;

  private authorized:boolean = false;

  constructor(private router: Router, private store: Store<any>) {
    this.login$ = store.select('login');

     this.login$.subscribe(
       data => this.authorized = data.authorized
     )
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log("Am I authorized? " + this.authorized)
    if(this.authorized) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  

}