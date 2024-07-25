import { ActionType } from "../action-types";
import { Action } from "../actions";
import { CurrentUserPayload } from "../payload.types";

const initialState: CurrentUserPayload | null = null;

const reducer = (state: CurrentUserPayload | null = initialState, action: Action): CurrentUserPayload | null => {
    switch (action.type) {
        case ActionType.CURRENT_USER: {
            state = {
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                role: action.payload.role,
                username: action.payload.username,
                uuid: action.payload.uuid
            }

            return state;
        }

        case ActionType.LOGOUT: {
            return null;
        }

        default: {
            return state;
        }
    }
}

export default reducer;