import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { AlertPayload, CurrentUserPayload } from "../payload.types";
import { Patient } from "../../types/patient";

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

export const getPatients = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_PATIENTS
        });
    }
}

export const addPatient = (payload: Patient) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_PATIENT,
            payload: payload
        });
    }    
}

export const currentUser = (payload: CurrentUserPayload) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CURRENT_USER,
            payload: payload
        });
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

export const openAlert = (payload: AlertPayload) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.OPEN_ALERT,
            payload: payload
        });
    }
}

export const closeAlert = (payload: AlertPayload) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.OPEN_ALERT,
            payload: payload
        });
    }
}

