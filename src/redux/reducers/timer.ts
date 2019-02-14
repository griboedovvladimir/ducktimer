import { actions } from '../actons';

interface ITime{
    type: string;
    payload: string |  {id: string};
}

export default ( state: any = {timers: []}, action: ITime ) => {
    switch ( action.type ) {
        case actions.ADD_TIMER:
            return {
                ...state,
                timers: [ ...state.timers, action.payload ]
            };
        case actions.REMOVE_TIMER:
            let timers = [...state.timers];
            let i: number = state.timers.findIndex( ( item: { id:  string }) => item.id === action.payload);
            timers.splice(i, 1);
            return {
                ...state,
                timers: timers
            };
        case actions.REMOVE_ALL_TIMERS:
            return {...state, timers: []};
        default :
            return state
    }

}