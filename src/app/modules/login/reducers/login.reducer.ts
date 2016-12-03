import { ActionReducer, Action } from '@ngrx/store';
import { AuthModel } from '../models/auth.model';

export const LoginReducer: ActionReducer<any> = (state:AuthModel = new AuthModel(), action: Action) => {

    switch(action.type){

        case 'login': {
            return Object.assign(new AuthModel(), state, {authorized: action.payload});
        }

        default:
            return state;
    }


} 