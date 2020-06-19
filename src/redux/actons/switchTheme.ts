import { ActionCreator } from 'redux';
import { actions } from './actions';

export interface ISwitchTheme {
  type: string;
  payload: string;
}

export const switchTheme: ActionCreator<ISwitchTheme> = (theme: string) => {
  return {
    type: actions.SWITCH_THEME,
    payload: theme,
  };
};
