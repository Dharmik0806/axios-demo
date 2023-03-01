import { combineReducers } from "redux";
import { signFormReducer } from "./signinform.reducer";


export const rooteReducer = combineReducers({
    formData :signFormReducer
})