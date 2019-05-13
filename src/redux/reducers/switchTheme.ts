import { actions } from '../actons';
import { ISwitchTheme } from '../actons';

export default ( state = {theme: 'b-n-w'}, action: ISwitchTheme ) => {
    switch ( action.type ) {
        case actions.SWITCH_THEME:
            document.getElementsByTagName( 'html' )[0].className ='';
            document.getElementsByTagName( 'html' )[0].classList.add(action.payload);
            return {
                ...state,
                theme: action.payload
            };
        default :
            return state
    }
}