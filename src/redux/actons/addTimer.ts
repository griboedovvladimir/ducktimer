import { ActionCreator } from 'redux';
import { actions } from './actions';

export interface IAddTimer {
    type: string;
    payload: { id: string };
}

export const addTimer: ActionCreator<IAddTimer> = ( timer: {id: string} ) => {
    return {
        type: actions.ADD_TIMER,
        payload: timer
    }
};
