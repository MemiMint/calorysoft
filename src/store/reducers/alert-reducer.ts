import { ActionType } from "../action-types";
import { Action } from "../actions";
import { AlertPayload } from "../payload.types";


const initialState: AlertPayload | null = null;

const reducer = (state: AlertPayload | null = initialState, action: Action): AlertPayload | null => {
    switch (action.type) {
        case ActionType.OPEN_ALERT : {
            state = action.payload;

            return state;
        }

        case ActionType.CLOSE_ALERT : {


            state = {
                open: false,
                title: "",
                type: "info",
                subtitle: ""
            }

            return state;
        }
        
        default: {
            return state;
        }
    }
}

export default reducer;