import { combineReducers } from "redux";
import loadingReducer from "./loading-reducer";
import userReducer from "./user-reducer";

export const reducers = combineReducers({
    loading: loadingReducer,
    currentUser: userReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;