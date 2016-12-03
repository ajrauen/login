import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { AuthModel } from '../models/auth.model';

@Injectable()
export class LoginService {

  constructor(private router: Router, private store: Store<AuthModel>) {}
  
  login() {
    this.store.dispatch({type:'login',payload:true});
    this.router.navigate([''])
  }
}