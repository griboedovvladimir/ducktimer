import { actions } from '../actons';
import { ISwitchTheme } from '../actons';

export default ( state = {theme: 'b-n-w'}, action: ISwitchTheme ) => {
    switch ( action.type ) {
        case actions.SWITCH_THEME:
            return {
                ...state,
                theme: action.payload
            };
        default :
            return state
    }
}