import { actions } from '../actons';
import { IAuthorize } from '../actons';

const initialState = { token: '' };

export default (
  state: { token: string } = initialState,
  action: IAuthorize
) => {
  switch (action.type) {
    case actions.AUTHORIZE:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
