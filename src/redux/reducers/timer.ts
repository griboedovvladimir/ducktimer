import { actions } from '../actons';

interface ITime {
  type: string;
  payload: any;
}

export default (state: any = { timers: [] }, action: ITime) => {
  switch (action.type) {
    case actions.ADD_TIMER:
      return {
        ...state,
        timers: [...state.timers, action.payload],
      };
    case actions.REMOVE_TIMER:
      let timers = [...state.timers];
      let i: number = state.timers.findIndex(
        (item: { id: string }) => item.id === action.payload
      );
      timers.splice(i, 1);
      return {
        ...state,
        timers: timers,
      };
    case actions.REMOVE_ALL_TIMERS:
      return { ...state, timers: [] };
    case actions.SET_TIME:
      return {
        ...state,
        timers: state.timers.map((timer: any) => {
          if (timer.id === action.payload.id) {
            return { id: timer.id, time: action.payload.time };
          }
          return timer;
        }),
      };
    default:
      return state;
  }
};
