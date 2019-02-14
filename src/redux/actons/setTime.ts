import { ActionCreator } from 'redux';
import { actions } from './actions';

export interface ISetTime {
    type: string;
    payload:  string ;
}

export const setTime: ActionCreator<ISetTime> = ( presetTime: string ) => {
    return {
        type: actions.SET_TIME,
        payload: presetTime
    }
};
