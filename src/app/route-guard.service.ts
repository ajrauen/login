import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { LoginService } from './modules/login/services/login.service';


@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  isAuthenticated(){
    return this.loginService.authorized;
  }

}