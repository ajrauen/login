import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

@Injectable()
export class LoginService {

  constructor(private router: Router, private store: Store<any>) {}

  login() {
    this.store.dispatch({type:'login',payload:true});
    this.router.navigate([''])
  }
}