import { ActionType } from "../action-types";



interface StartLoadingAction {
    type: ActionType.START_LOADING
}

interface FinishLoadingAction {
    type: ActionType.FINISH_LOADING
}

interface CurrentUser {
    type: ActionType.CURRENT_USER,
    payload: {
        uuid: string;
        firstname: string;
        lastname: string;
        username: string;
        role: number;
    } 
}

export type Logout {
    type: ActionType.LOGOUT,
}

export type Action = StartLoadingAction | FinishLoadingAction | CurrentUser | Logout; 