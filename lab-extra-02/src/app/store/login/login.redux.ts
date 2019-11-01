import * as login from './login.actions';

/**
 * State 
 */
export interface State {

    /**
     * Login status
     */
    logged: boolean;
}

/**
 * Initial State
 */
export const initialState: State = {
    logged: false
};

/**
 * Reducer for Central State Managment
 * @param state current state
 * @param action received action
 */
export function reducer(state: State = initialState, action: login.Actions): State {

    switch (action.type) {
        case login.LOGGED:
            return {
                ...state,
                logged: action.payload
            };
        default:
            return state;
    }
}
