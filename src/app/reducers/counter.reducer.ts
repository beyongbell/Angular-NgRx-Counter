import { Action } from "@ngrx/store";
import { ActionsTypes } from './counter.actions';

export const initialState = 0;

export function counterReducer(state = initialState, action: Action) {
    switch(action.type) {
        case ActionsTypes.Increment:
            return state + 1;
        case ActionsTypes.Decrement:
            return state - 1;
        case ActionsTypes.Reset:
            return 0;
        default:
            return state;
    }
}