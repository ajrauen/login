import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class LoginService {

  authorized: boolean;

  constructor(private router: Router) {

  }

  login() {
    this.authorized = true;
    this.router.navigate([''])
  }

  getLoginStore(){

  }

}