import { actions } from '../actons';

export default ( state = {presetTime: '00:00:00'}, action: any ) => {
    switch ( action.type ) {
        case actions.SET_TIME:
            return {
                ...state,
                presetTime: action.payload
            };
        default :
            return state
    }
}