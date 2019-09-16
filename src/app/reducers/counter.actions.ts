import { Action } from '@ngrx/store';

export enum ActionsTypes {
    Increment = '[Counter Component] Increment',
    Decrement = '[Counter Component] Decrement',
    Reset = '[Counter Component] Reset'
}

export class Increment implements Action {
    readonly type = ActionsTypes.Increment;
}

export class Decrement implements Action {
    readonly type = ActionsTypes.Decrement;
}

export class Reset implements Action {
    readonly type = ActionsTypes.Reset;
}