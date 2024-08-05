import { ActionType } from "../action-types";
import { AlertPayload, CurrentUserPayload } from "../payload.types";
import { Patient } from "../../types/patient";

interface StartLoadingAction {
    type: ActionType.START_LOADING;
}

interface FinishLoadingAction {
    type: ActionType.FINISH_LOADING;
}

interface OpenAlert {
    type: ActionType.OPEN_ALERT;
    payload: AlertPayload;
}

interface CloseAlert {
    type: ActionType.CLOSE_ALERT;
    payload: AlertPayload;
}

interface GetPatients {
    type: ActionType.GET_PATIENTS;
}

interface AddPatient {
    type: ActionType.ADD_PATIENT;
    payload: Patient;
}

interface CurrentUser {
    type: ActionType.CURRENT_USER;
    payload: CurrentUserPayload;
}

interface Logout {
    type: ActionType.LOGOUT;
}

export type Action = StartLoadingAction | FinishLoadingAction | CurrentUser | GetPatients | AddPatient | OpenAlert | CloseAlert | Logout; 