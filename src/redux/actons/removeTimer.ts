import { ActionCreator } from 'redux';
import { actions } from './actions';

export interface IRemoveTimer {
  type: string;
  payload: string;
}

export const removeTimer: ActionCreator<IRemoveTimer> = (id: string) => {
  return {
    type: actions.REMOVE_TIMER,
    payload: id,
  };
};
