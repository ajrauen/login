import { Injectable } from '@angular/core';

import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  isAuthenticated(){
    return false;
  }

}