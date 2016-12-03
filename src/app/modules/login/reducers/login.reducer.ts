import { ActionReducer, Action } from '@ngrx/store';

export const LoginReducer: ActionReducer<any> = (state = {authorized:false}, action: Action) => {

    switch(action.type){

        case 'login': {
            return Object.assign({}, state, {authorized: action.payload});
        }

        default:
            return state;
    }


} 