import {actions} from '../actons/actions';
import {IAuthorize} from '../actons/authorize';

const initialState = {token: ''};

export default (state: { token: string} = initialState, action: IAuthorize) => {
    switch (action.type) {
        case actions.AUTHORIZE:
            return {
                ...state,
                token: action.payload
            };
        default :
            return state
    }

}