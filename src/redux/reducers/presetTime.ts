import { actions } from '../actons';
import { ISetTime } from '../actons';

export default ( state = {presetTime: '00:00:00'}, action: ISetTime ) => {
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