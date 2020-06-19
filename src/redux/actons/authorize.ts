import { ActionCreator } from 'redux';
import { actions } from './actions';

export interface IAuthorize {
  type: string;
  payload: string;
}

export const authorize: ActionCreator<IAuthorize> = (token: string) => {
  return {
    type: actions.AUTHORIZE,
    payload: token,
  };
};
