import { Action } from '@ngrx/store';

/**
 * action identification for login
 */
export const LOGGED = 'login/logged';

/**
 * Action Logged for Central State Managment
 */
export class Logged implements Action {

    /**
     * type of action
     */
    readonly type: string = LOGGED;

    /**
     * 
     * @param payload Incoming value
     */
    constructor(public payload: boolean) { }

}

/**
 * Type definition
 */
export type Actions = Logged;
