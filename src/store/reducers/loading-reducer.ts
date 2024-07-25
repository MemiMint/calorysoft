import { ActionType } from "../action-types";
import { Action } from "../actions";

const initialState: boolean = false;

const reducer = (state: boolean = initialState, action: Action): boolean => {
    switch (action.type) {
        case ActionType.START_LOADING: {
            return state = true;
        }

        case ActionType.FINISH_LOADING: {
            return state = false;
        }

        default: {
            return state;
        }
    }
}

export default reducer;