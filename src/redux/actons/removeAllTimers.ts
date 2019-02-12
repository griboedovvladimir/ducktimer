import { ActionCreator } from 'redux';
import { actions } from './actions';

export interface IRemoveAllTimers {
    type: string;
}

export const removeAllTimers: ActionCreator<IRemoveAllTimers> = () => {
    return {
        type: actions.REMOVE_ALL_TIMERS,
    }
};
