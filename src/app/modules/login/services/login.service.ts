import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import * as loginActions from '../actions/login.action';
import { AuthModel } from '../models/auth.model';

@Injectable()
export class LoginService {

  constructor(private router: Router, private store: Store<AuthModel>) {}
  
  login() {
    this.store.dispatch(new loginActions.LoginAction(true));
    this.router.navigate([''])
  }
}