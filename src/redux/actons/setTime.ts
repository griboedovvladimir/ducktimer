import { ActionCreator } from 'redux';
import { actions } from './actions';

export interface ISetTime {
    type: string;
    payload:  any ;
}

export const setTime: ActionCreator<ISetTime> = ( presetTime: any ) => {
    return {
        type: actions.SET_TIME,
        payload: presetTime
    }
};
