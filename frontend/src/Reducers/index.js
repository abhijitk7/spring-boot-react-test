import { combineReducers } from "redux";
import { contactReducer } from "./ContactReducer";

export default combineReducers({
    data:contactReducer,
})