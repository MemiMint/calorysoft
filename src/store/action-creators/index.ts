import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { CurrentUserPayload } from "../payload.types";

export const startLoading = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.START_LOADING
        });
    }
}

export const finishLoading = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FINISH_LOADING
        });
    }
}

export const currentUser = (payload: CurrentUserPayload) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CURRENT_USER,
            payload: payload
        })
    }
}

export const logout = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGOUT,
            payload: null
        });
    }
}