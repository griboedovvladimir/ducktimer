import { actions } from '../actons';

export default ( state = {theme: 'b-n-w'}, action: any ) => {
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