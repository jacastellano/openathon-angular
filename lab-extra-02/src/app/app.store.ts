import { ActionReducerMap } from '@ngrx/store';
import * as loginReducer from './store/login/login.redux';

/**
 * Application Central State
 */
export interface State {

    /**
     * Login State
     */
    login: loginReducer.State;
}

/**
 * Reducers Map
 */
export const reducers: ActionReducerMap<State> = {
    login: loginReducer.reducer
};

