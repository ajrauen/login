import { ActionReducer, Action } from '@ngrx/store';

import { AuthModel } from '../models/auth.model';
import * as loginActions from '../actions/login.action';

export const LoginReducer: ActionReducer<any> = (state:AuthModel = new AuthModel(), action: Action) => {

    switch(action.type){

        case loginActions.ActionTypes.login: {
            return Object.assign(new AuthModel(), state, {authorized: action.payload});
        }

        default:
            return state;
    }


} 