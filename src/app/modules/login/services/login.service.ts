import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class LoginService {

  private login$: Observable<any>;

  constructor(private router: Router, private store: Store<any>) {
    this.login$ = store.select('login');
  }

  login() {
    this.store.dispatch({type:'login',payload:true});
    this.router.navigate([''])
  }
}