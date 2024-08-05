import { combineReducers } from "redux";
import loadingReducer from "./loading-reducer";
import userReducer from "./user-reducer";
import patientReducer from "./patient-reducer";
import alertReducer from "./alert-reducer";

export const reducers = combineReducers({
    loading: loadingReducer,
    currentUser: userReducer,
    patients: patientReducer,
    alert: alertReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;